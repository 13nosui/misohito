import { useState, useEffect } from 'react';
import {
    User,
    signInWithPopup,
    signOut as firebaseSignOut,
    onAuthStateChanged,
    AuthError
} from 'firebase/auth';
import { auth, googleProvider } from '@/lib/firebase';

export const useAuth = () => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    // Googleログイン（モバイル・PC共通でポップアップを使用）
    const signIn = async () => {
        try {
            // ポップアップを実行
            await signInWithPopup(auth, googleProvider);
        } catch (error) {
            console.error("Login failed", error);
            const authError = error as AuthError;

            // エラーの内容をユーザーに通知
            if (authError.code === 'auth/popup-blocked') {
                alert("ポップアップがブロックされました。ブラウザの設定でポップアップを許可してください。");
            } else if (authError.code === 'auth/popup-closed-by-user') {
                // ユーザーが閉じた場合は何もしない（あるいはログ出すだけ）
                console.log("ユーザーによって閉じられました");
            } else {
                alert(`ログインエラーが発生しました: ${authError.message}`);
            }
        }
    };

    const signOut = async () => {
        try {
            await firebaseSignOut(auth);
        } catch (error) {
            console.error("Logout failed", error);
        }
    };

    return { user, loading, signIn, signOut };
};