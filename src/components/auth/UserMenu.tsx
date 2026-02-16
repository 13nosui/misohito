'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { motion, AnimatePresence } from 'framer-motion';

export const UserMenu = () => {
    const { user, loading, signOut } = useAuth(); // signInは不要なので削除
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // ロード中、または未ログイン時は何も表示しない（ログイン画面に任せる）
    if (loading || !user) return null;

    return (
        <div className="absolute top-0 left-0 p-6 z-50">
            <div className="relative" ref={menuRef}>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="block w-8 h-8 rounded-full overflow-hidden border border-slate-200 hover:border-slate-400 transition-colors"
                >
                    {user.photoURL ? (
                        <img src={user.photoURL} alt="User" className="w-full h-full object-cover" />
                    ) : (
                        <div className="w-full h-full bg-slate-100" />
                    )}
                </button>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-10 left-0 w-48 bg-white border border-slate-100 rounded-sm shadow-sm py-2"
                        >
                            <div className="px-4 py-2 border-b border-slate-50 mb-2">
                                <p className="text-[10px] text-slate-400 uppercase tracking-wider">Logged in as</p>
                                <p className="text-xs text-slate-700 truncate font-medium">{user.displayName}</p>
                            </div>

                            <button
                                onClick={() => {
                                    signOut();
                                    setIsOpen(false);
                                }}
                                className="w-full text-left px-4 py-2 text-xs text-slate-500 hover:bg-slate-50 hover:text-red-400 transition-colors"
                            >
                                Sign Out
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};