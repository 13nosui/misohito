import { useState, useEffect } from 'react';
import {
    User,
    signInWithPopup,
    signInWithRedirect, // 追加
    getRedirectResult,  // 追加
    signOut as firebaseSignOut,
    onAuthStateChanged
} from 'firebase/auth';
import { auth, googleProvider } from '@/lib/firebase';

export const useAuth = () => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // リダイレクト結果の取得を試みる
        getRedirectResult(auth)
            .then((result) => {
                if (result) {
                    alert(`リダイレクト成功: ユーザー ${result.user.displayName}`);
                    console.log("Redirect success:", result);
                } else {
                    // ここが重要：リダイレクト結果が見つからない場合
                    alert("リダイレクト結果なし（null）");
                }
            })
            .catch((error) => {
                console.error("Redirect error:", error);
                alert(`リダイレクトエラー: ${error.message}`);
            });

        // 認証状態の監視
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                alert(`Auth検知: ログイン済み ${currentUser.displayName}`);
                setUser(currentUser);
            } else {
                // 初回は必ずここを通るが、リダイレクト成功後ならユーザーが入るはず
                console.log("Auth検知: ユーザーなし");
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    // Googleログイン
    const signIn = async () => {
        try {
            // モバイル端末かどうかを簡易判定
            const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

            if (isMobile) {
                // モバイルの場合はリダイレクト方式を使用
                await signInWithRedirect(auth, googleProvider);
            } else {
                // PCの場合はポップアップ方式を使用
                await signInWithPopup(auth, googleProvider);
            }
        } catch (error) {
            console.error("Login failed", error);
        }
    };

    // ログアウト
    const signOut = async () => {
        try {
            await firebaseSignOut(auth);
        } catch (error) {
            console.error("Logout failed", error);
        }
    };

    return { user, loading, signIn, signOut };
};