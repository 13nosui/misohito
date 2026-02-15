(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/hooks/useTankaEditor.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTankaEditor",
    ()=>useTankaEditor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
const LIMITS = {
    kami1: 5,
    kami2: 7,
    kami3: 5,
    shimo1: 7,
    shimo2: 7
};
const useTankaEditor = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "a5b392fd979b6df3cf83ab9cfbb0b24431c19573da48a05f39c17ae0352689ed") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a5b392fd979b6df3cf83ab9cfbb0b24431c19573da48a05f39c17ae0352689ed";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            kami1: "",
            kami2: "",
            kami3: "",
            shimo1: "",
            shimo2: ""
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [sections, setSections] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const kami1Ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const kami2Ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const kami3Ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const shimo1Ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const shimo2Ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            kami1: kami1Ref,
            kami2: kami2Ref,
            kami3: kami3Ref,
            shimo1: shimo1Ref,
            shimo2: shimo2Ref
        };
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const inputRefs = t1;
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = (e, key)=>{
            const value = e.target.value;
            const limit = LIMITS[key];
            if (value.length <= limit) {
                setSections((prev)=>({
                        ...prev,
                        [key]: value
                    }));
            }
            if (value.length === limit) {
                const keys = Object.keys(LIMITS);
                const currentIndex = keys.indexOf(key);
                const nextKey = keys[currentIndex + 1];
                if (nextKey) {
                    inputRefs[nextKey].current?.focus();
                }
            }
        };
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const handleChange = t2;
    let t3;
    if ($[4] !== sections) {
        t3 = {
            sections,
            inputRefs,
            handleChange,
            LIMITS
        };
        $[4] = sections;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    return t3;
};
_s(useTankaEditor, "b9UmhjC2IcrZGSjGOlMm+75FfeY=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/post/PostAnimation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PostAnimation",
    ()=>PostAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
'use client';
;
;
const PostAnimation = ({ sections })=>{
    const sectionKeys = [
        'kami1',
        'kami2',
        'kami3',
        'shimo1',
        'shimo2'
    ];
    // 文字ごとのディレイを蓄積して計算するための変数
    let globalCharIndex = 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center justify-center min-h-[50vh]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap items-center justify-center max-w-2xl gap-y-6",
            children: sectionKeys.map((key, sIndex)=>{
                const chars = sections[key].split('');
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex mr-[1.5em] last:mr-0",
                    children: [
                        " ",
                        chars.map((char, cIndex)=>{
                            // 中村勇吾風リズムの計算
                            // 文字間は0.05秒と高速、節の間で0.2秒のタメを作る
                            const delay = globalCharIndex * 0.05 + sIndex * 0.2;
                            globalCharIndex++;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                className: "text-3xl md:text-4xl font-medium tracking-tight text-slate-900",
                                initial: {
                                    opacity: 0,
                                    x: -20,
                                    filter: 'blur(10px)'
                                },
                                animate: {
                                    opacity: 1,
                                    x: 0,
                                    filter: 'blur(0px)'
                                },
                                transition: {
                                    duration: 0.4,
                                    delay: delay,
                                    ease: [
                                        0.16,
                                        1,
                                        0.3,
                                        1
                                    ] // 切れ味鋭いイージング
                                },
                                children: char
                            }, `${key}-${cIndex}`, false, {
                                fileName: "[project]/src/components/post/PostAnimation.tsx",
                                lineNumber: 29,
                                columnNumber: 20
                            }, ("TURBOPACK compile-time value", void 0));
                        })
                    ]
                }, key, true, {
                    fileName: "[project]/src/components/post/PostAnimation.tsx",
                    lineNumber: 23,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            })
        }, void 0, false, {
            fileName: "[project]/src/components/post/PostAnimation.tsx",
            lineNumber: 20,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/post/PostAnimation.tsx",
        lineNumber: 16,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_c = PostAnimation;
var _c;
__turbopack_context__.k.register(_c, "PostAnimation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/editor/TankaEditor.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TankaEditor",
    ()=>TankaEditor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-label/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTankaEditor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useTankaEditor.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$post$2f$PostAnimation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/post/PostAnimation.tsx [app-client] (ecmascript)"); // ←追加
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const TankaEditor = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(28);
    if ($[0] !== "9dc662f00be909da87b96f9ff0b2650f85d69b440f0ee6a69399fe35f587b7f8") {
        for(let $i = 0; $i < 28; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9dc662f00be909da87b96f9ff0b2650f85d69b440f0ee6a69399fe35f587b7f8";
    }
    const { sections, inputRefs, handleChange, LIMITS } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTankaEditor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTankaEditor"])();
    const [isPosted, setIsPosted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const isComplete = Object.keys(LIMITS).every((key)=>sections[key].length === LIMITS[key]);
    let t0;
    if ($[1] !== isComplete) {
        t0 = ()=>{
            if (isComplete) {
                setIsPosted(true);
            }
        };
        $[1] = isComplete;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    const handlePost = t0;
    if (isPosted) {
        let t1;
        if ($[3] !== sections) {
            t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$post$2f$PostAnimation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PostAnimation"], {
                sections: sections
            }, void 0, false, {
                fileName: "[project]/src/components/editor/TankaEditor.tsx",
                lineNumber: 42,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[3] = sections;
            $[4] = t1;
        } else {
            t1 = $[4];
        }
        return t1;
    }
    let t1;
    if ($[5] !== LIMITS) {
        t1 = Object.keys(LIMITS);
        $[5] = LIMITS;
        $[6] = t1;
    } else {
        t1 = $[6];
    }
    const t2 = t1;
    let t3;
    if ($[7] !== LIMITS || $[8] !== handleChange || $[9] !== inputRefs || $[10] !== sections || $[11] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap gap-4 items-end justify-center",
            children: t2.map((key_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
                            className: "text-[10px] text-slate-400 font-medium uppercase tracking-widest",
                            htmlFor: key_0,
                            children: LIMITS[key_0]
                        }, void 0, false, {
                            fileName: "[project]/src/components/editor/TankaEditor.tsx",
                            lineNumber: 61,
                            columnNumber: 152
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            ref: inputRefs[key_0],
                            id: key_0,
                            type: "text",
                            value: sections[key_0],
                            onChange: (e)=>handleChange(e, key_0),
                            placeholder: "\u30FB",
                            className: `
                text-center text-2xl font-medium border-b transition-all outline-none bg-transparent
                ${sections[key_0].length === LIMITS[key_0] ? "border-slate-800 text-slate-900" : "border-slate-200 text-slate-400 focus:border-slate-400"}
              `,
                            style: {
                                width: `${LIMITS[key_0] * 1.5 + 1}rem`
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/editor/TankaEditor.tsx",
                            lineNumber: 61,
                            columnNumber: 285
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, key_0, true, {
                    fileName: "[project]/src/components/editor/TankaEditor.tsx",
                    lineNumber: 61,
                    columnNumber: 90
                }, ("TURBOPACK compile-time value", void 0)))
        }, void 0, false, {
            fileName: "[project]/src/components/editor/TankaEditor.tsx",
            lineNumber: 61,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = LIMITS;
        $[8] = handleChange;
        $[9] = inputRefs;
        $[10] = sections;
        $[11] = t2;
        $[12] = t3;
    } else {
        t3 = $[12];
    }
    let t4;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-slate-400 mb-4 font-light tracking-widest",
            children: "PREVIEW"
        }, void 0, false, {
            fileName: "[project]/src/components/editor/TankaEditor.tsx",
            lineNumber: 78,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = t4;
    } else {
        t4 = $[13];
    }
    let t5;
    if ($[14] !== sections) {
        t5 = Object.values(sections).filter(Boolean);
        $[14] = sections;
        $[15] = t5;
    } else {
        t5 = $[15];
    }
    const t6 = t5.join("\u3000");
    let t7;
    if ($[16] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center",
            children: [
                t4,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-lg tracking-wider text-slate-600 font-serif",
                    children: t6
                }, void 0, false, {
                    fileName: "[project]/src/components/editor/TankaEditor.tsx",
                    lineNumber: 94,
                    columnNumber: 43
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/editor/TankaEditor.tsx",
            lineNumber: 94,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[16] = t6;
        $[17] = t7;
    } else {
        t7 = $[17];
    }
    const t8 = !isComplete;
    const t9 = `
            px-8 py-3 rounded-full text-sm font-bold tracking-widest transition-all duration-500
            ${isComplete ? "bg-slate-900 text-white hover:bg-slate-700 translate-y-0 opacity-100" : "bg-slate-200 text-slate-400 translate-y-4 opacity-0 cursor-not-allowed"}
          `;
    let t10;
    if ($[18] !== handlePost || $[19] !== t8 || $[20] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: handlePost,
            disabled: t8,
            className: t9,
            children: "詠む"
        }, void 0, false, {
            fileName: "[project]/src/components/editor/TankaEditor.tsx",
            lineNumber: 107,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[18] = handlePost;
        $[19] = t8;
        $[20] = t9;
        $[21] = t10;
    } else {
        t10 = $[21];
    }
    let t11;
    if ($[22] !== t10 || $[23] !== t7) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center gap-8 animate-in fade-in duration-700",
            children: [
                t7,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/editor/TankaEditor.tsx",
            lineNumber: 117,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[22] = t10;
        $[23] = t7;
        $[24] = t11;
    } else {
        t11 = $[24];
    }
    let t12;
    if ($[25] !== t11 || $[26] !== t3) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-12 p-6 w-full max-w-3xl mx-auto",
            children: [
                t3,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/editor/TankaEditor.tsx",
            lineNumber: 126,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[25] = t11;
        $[26] = t3;
        $[27] = t12;
    } else {
        t12 = $[27];
    }
    return t12;
};
_s(TankaEditor, "kEexNEOm9Tf38YbXkStxeFOE2mg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTankaEditor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTankaEditor"]
    ];
});
_c = TankaEditor;
var _c;
__turbopack_context__.k.register(_c, "TankaEditor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_b6cb9485._.js.map