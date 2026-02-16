import { useState, useEffect } from 'react';
import {
    collection,
    query,
    orderBy,
    onSnapshot,
    addDoc,
    deleteDoc,
    doc,
    serverTimestamp,
    updateDoc,
    increment
} from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { useAuth } from '@/hooks/useAuth'; // ★追加: 認証状態を取得
import { Post, TankaSections, Author } from '@/types/post';

export const usePosts = () => {
    const { user } = useAuth(); // ★追加: ログインユーザー情報を取得
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    // タイムラインのリアルタイム同期
    useEffect(() => {
        // ★修正: データベース未接続、または未ログイン時は何もしない
        if (!db || !user) {
            setPosts([]); // 未ログイン時は空にする
            setLoading(false);
            return;
        }

        const q = query(collection(db, 'posts'), orderBy('createdAt', 'desc'));

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const newPosts = snapshot.docs.map(doc => {
                const data = doc.data();
                return {
                    id: doc.id,
                    ...data,
                    createdAt: data.createdAt?.toDate() || new Date(),
                } as Post;
            });
            setPosts(newPosts);
            setLoading(false);
        }, (error) => {
            console.error("Firestore listen error:", error);
            setLoading(false);
        });

        return () => unsubscribe();
    }, [user]); // ★修正: userが変わるたび（ログイン・ログアウト時）に再実行

    // 投稿を追加
    const addPost = async (sections: TankaSections, author: Author) => {
        // 未ログインなら投稿させないガード
        if (!user) return;

        const safeSections = {
            kami1: sections.kami1 || '',
            kami2: sections.kami2 || '',
            kami3: sections.kami3 || '',
            shimo1: sections.shimo1 || '',
            shimo2: sections.shimo2 || '',
        };

        try {
            await addDoc(collection(db, 'posts'), {
                sections: safeSections,
                author,
                createdAt: serverTimestamp(),
                likes: 0
            });
        } catch (error) {
            console.error("Error adding document: ", error);
            throw error;
        }
    };

    const deletePost = async (id: string) => {
        if (!user) return;
        try {
            await deleteDoc(doc(db, 'posts', id));
        } catch (error) {
            console.error("Error deleting document: ", error);
        }
    };

    const likePost = async (id: string) => {
        if (!user) return;
        try {
            const ref = doc(db, 'posts', id);
            await updateDoc(ref, {
                likes: increment(1)
            });
        } catch (error) {
            console.error("Error liking post: ", error);
        }
    }

    return { posts, loading, addPost, deletePost, likePost };
};