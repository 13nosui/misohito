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
        // リダイレクトログインから戻ってきた場合のエラー処理などを確認
        getRedirectResult(auth).catch((error) => {
            console.error("Redirect result failed", error);
        });

        // 認証状態の変更を監視
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
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