'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '@/hooks/useAuth';

export const LoginScreen = () => {
    const { signIn } = useAuth();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#fafafa] relative overflow-hidden">

            {/* 装飾的な背景文字（薄く表示） */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
                <motion.span
                    className="text-[20vw] font-bold text-slate-50 opacity-[0.5] whitespace-nowrap"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 0.5, scale: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                >
                    MISOHITO
                </motion.span>
            </div>

            <div className="z-10 flex flex-col items-center gap-12">
                <div className="text-center space-y-4">
                    <motion.h1
                        className="text-4xl md:text-6xl font-light tracking-[0.2em] text-slate-800"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        MISOHITO
                    </motion.h1>
                    <motion.p
                        className="text-xs md:text-sm text-slate-400 tracking-[0.1em] font-light"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        31 SYLLABLES TO FORGET
                    </motion.p>
                </div>

                <motion.button
                    onClick={signIn}
                    className="group relative px-8 py-3 bg-white border border-slate-200 rounded-full text-xs font-medium tracking-widest text-slate-600 hover:text-slate-900 hover:border-slate-400 transition-all duration-300 shadow-sm hover:shadow-md"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                >
                    <span className="relative z-10 flex items-center gap-3">
                        {/* Google Icon SVG */}
                        <svg className="w-4 h-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                        </svg>
                        SIGN IN WITH GOOGLE
                    </span>
                </motion.button>
            </div>

            <motion.footer
                className="absolute bottom-8 text-[10px] text-slate-300 tracking-[0.2em]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
            >
                © 2026 MISOHITO
            </motion.footer>
        </div>
    );
};