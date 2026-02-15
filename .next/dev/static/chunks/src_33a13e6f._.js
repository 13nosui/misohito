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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const PostAnimation = ({ sections, onComplete })=>{
    _s();
    const sectionKeys = [
        'kami1',
        'kami2',
        'kami3',
        'shimo1',
        'shimo2'
    ];
    let globalCharIndex = 0;
    // アニメーション総時間の計算
    // (31文字 * 0.05) + (5節 * 0.2) + 余裕を持たせて2秒後くらいに切り替え
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PostAnimation.useEffect": ()=>{
            if (onComplete) {
                const totalDuration = 31 * 50 + 5 * 200 + 2000;
                const timer = setTimeout({
                    "PostAnimation.useEffect.timer": ()=>{
                        onComplete();
                    }
                }["PostAnimation.useEffect.timer"], totalDuration);
                return ({
                    "PostAnimation.useEffect": ()=>clearTimeout(timer)
                })["PostAnimation.useEffect"];
            }
        }
    }["PostAnimation.useEffect"], [
        onComplete
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center justify-center min-h-[60vh]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap items-center justify-center max-w-2xl gap-y-6",
            children: sectionKeys.map((key, sIndex)=>{
                const chars = sections[key].split('');
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex mr-[1.5em] last:mr-0",
                    children: chars.map((char, cIndex)=>{
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
                                ]
                            },
                            children: char
                        }, `${key}-${cIndex}`, false, {
                            fileName: "[project]/src/components/post/PostAnimation.tsx",
                            lineNumber: 36,
                            columnNumber: 20
                        }, ("TURBOPACK compile-time value", void 0));
                    })
                }, key, false, {
                    fileName: "[project]/src/components/post/PostAnimation.tsx",
                    lineNumber: 32,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            })
        }, void 0, false, {
            fileName: "[project]/src/components/post/PostAnimation.tsx",
            lineNumber: 29,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/post/PostAnimation.tsx",
        lineNumber: 28,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_s(PostAnimation, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = PostAnimation;
var _c;
__turbopack_context__.k.register(_c, "PostAnimation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/post/DraggablePost.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DraggablePost",
    ()=>DraggablePost
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$matter$2d$js$2f$build$2f$matter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/matter-js/build/matter.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const DraggablePost = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(17);
    if ($[0] !== "2d9cf8c75f6463cf5b9b72b438ea82d2e1fb0b6e24859d85989f8f0a6d623bc9") {
        for(let $i = 0; $i < 17; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2d9cf8c75f6463cf5b9b72b438ea82d2e1fb0b6e24859d85989f8f0a6d623bc9";
    }
    const { sections, onDelete } = t0;
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const engineRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cardBodyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const dragConstraintRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isReady, setIsReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    let t2;
    if ($[1] !== onDelete) {
        t1 = ()=>{
            if (!cardRef.current) {
                return;
            }
            const cw = window.innerWidth;
            const ch = window.innerHeight;
            const engine = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$matter$2d$js$2f$build$2f$matter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Engine.create();
            engine.gravity.y = 0;
            engine.gravity.x = 0;
            engineRef.current = engine;
            const cardBody = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$matter$2d$js$2f$build$2f$matter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Bodies.rectangle(cw / 2, ch / 2, 600, 400, {
                frictionAir: 0.03,
                restitution: 0.5,
                density: 0.002
            });
            cardBodyRef.current = cardBody;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$matter$2d$js$2f$build$2f$matter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Body.setInertia(cardBody, cardBody.inertia * 0.2);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$matter$2d$js$2f$build$2f$matter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].World.add(engine.world, cardBody);
            let animationFrameId;
            const update = ()=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$matter$2d$js$2f$build$2f$matter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Engine.update(engine, 16.666666666666668);
                if (cardBody && cardRef.current) {
                    const { x, y } = cardBody.position;
                    const angle = cardBody.angle;
                    const isDragging = dragConstraintRef.current !== null;
                    const angularDamping = isDragging ? 0.92 : 0.995;
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$matter$2d$js$2f$build$2f$matter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Body.setAngularVelocity(cardBody, cardBody.angularVelocity * angularDamping);
                    cardRef.current.style.transform = `translate(${x - 300}px, ${y - 200}px) rotate(${angle}rad)`;
                    const speed = cardBody.speed;
                    const shadowBlur = Math.min(speed * 2 + 10, 50);
                    const shadowOpacity = Math.min(speed * 0.01 + 0.1, 0.25);
                    const shadowOffset = Math.min(speed + 5, 20);
                    const dx = x - cw / 2;
                    const dy = y - ch / 2;
                    const dist = Math.sqrt(dx * dx + dy * dy) || 1;
                    cardRef.current.style.boxShadow = `${dx / dist * -shadowOffset}px ${dy / dist * -shadowOffset + shadowOffset}px ${shadowBlur}px rgba(0,0,0,${shadowOpacity})`;
                    if (x < -400 || x > cw + 400 || y < -400 || y > ch + 400) {
                        onDelete();
                    }
                }
                animationFrameId = requestAnimationFrame(update);
            };
            update();
            setIsReady(true);
            return ()=>{
                cancelAnimationFrame(animationFrameId);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$matter$2d$js$2f$build$2f$matter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Engine.clear(engine);
            };
        };
        t2 = [
            onDelete
        ];
        $[1] = onDelete;
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = (e)=>{
            if (!cardBodyRef.current || !engineRef.current) {
                return;
            }
            const clientX = e.clientX;
            const clientY = e.clientY;
            const body = cardBodyRef.current;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$matter$2d$js$2f$build$2f$matter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Body.setVelocity(body, {
                x: body.velocity.x * 0.5,
                y: body.velocity.y * 0.5
            });
            const bodyPos = body.position;
            const offsetVector = {
                x: clientX - bodyPos.x,
                y: clientY - bodyPos.y
            };
            const localPoint = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$matter$2d$js$2f$build$2f$matter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Vector.rotate(offsetVector, -body.angle);
            const constraint = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$matter$2d$js$2f$build$2f$matter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Constraint.create({
                pointA: {
                    x: clientX,
                    y: clientY
                },
                bodyB: body,
                pointB: localPoint,
                stiffness: 0.15,
                damping: 0.05,
                length: 0,
                render: {
                    visible: false
                }
            });
            dragConstraintRef.current = constraint;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$matter$2d$js$2f$build$2f$matter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].World.add(engineRef.current.world, constraint);
            const onPointerMove = (moveEvent)=>{
                if (dragConstraintRef.current) {
                    dragConstraintRef.current.pointA = {
                        x: moveEvent.clientX,
                        y: moveEvent.clientY
                    };
                }
            };
            const onPointerUp = ()=>{
                if (engineRef.current && dragConstraintRef.current) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$matter$2d$js$2f$build$2f$matter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].World.remove(engineRef.current.world, dragConstraintRef.current);
                }
                dragConstraintRef.current = null;
                window.removeEventListener("pointermove", onPointerMove);
                window.removeEventListener("pointerup", onPointerUp);
            };
            window.addEventListener("pointermove", onPointerMove);
            window.addEventListener("pointerup", onPointerUp);
        };
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const handlePointerDown = t3;
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = [
            "kami1",
            "kami2",
            "kami3",
            "shimo1",
            "shimo2"
        ];
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    const sectionKeys = t4;
    const t5 = isReady ? 1 : 0;
    let t6;
    if ($[6] !== t5) {
        t6 = {
            width: "600px",
            height: "400px",
            opacity: t5
        };
        $[6] = t5;
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] !== sections) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center justify-center h-full gap-y-8 pointer-events-none mix-blend-multiply",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap justify-center items-center content-center h-full max-w-lg gap-x-6 gap-y-4",
                children: sectionKeys.map((key)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-3xl md:text-4xl font-semibold tracking-tighter text-slate-800 whitespace-nowrap",
                        style: {
                            fontFeatureSettings: "\"palt\""
                        },
                        children: sections[key]
                    }, key, false, {
                        fileName: "[project]/src/components/post/DraggablePost.tsx",
                        lineNumber: 176,
                        columnNumber: 254
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/components/post/DraggablePost.tsx",
                lineNumber: 176,
                columnNumber: 123
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/post/DraggablePost.tsx",
            lineNumber: 176,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = sections;
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    let t8;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-slate-500 opacity-[0.03] pointer-events-none rounded-sm"
        }, void 0, false, {
            fileName: "[project]/src/components/post/DraggablePost.tsx",
            lineNumber: 186,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = t8;
    } else {
        t8 = $[10];
    }
    let t9;
    if ($[11] !== t6 || $[12] !== t7) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: cardRef,
            onPointerDown: handlePointerDown,
            className: "absolute left-0 top-0 cursor-grab active:cursor-grabbing p-16 bg-[#FFFCF9] rounded-sm border border-slate-200/60 select-none will-change-transform",
            style: t6,
            children: [
                t7,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/post/DraggablePost.tsx",
            lineNumber: 193,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = t6;
        $[12] = t7;
        $[13] = t9;
    } else {
        t9 = $[13];
    }
    let t10;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
            className: "fixed bottom-12 left-0 right-0 text-center text-[10px] text-slate-300 font-light tracking-[0.2em] uppercase pointer-events-none",
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            transition: {
                delay: 1
            },
            children: "Throw away to forget"
        }, void 0, false, {
            fileName: "[project]/src/components/post/DraggablePost.tsx",
            lineNumber: 202,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[14] = t10;
    } else {
        t10 = $[14];
    }
    let t11;
    if ($[15] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: containerRef,
            className: "fixed inset-0 overflow-hidden touch-none",
            children: [
                t9,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/post/DraggablePost.tsx",
            lineNumber: 215,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = t9;
        $[16] = t11;
    } else {
        t11 = $[16];
    }
    return t11;
};
_s(DraggablePost, "2f7TmkliZX/rmjc1X4DE1iCJJ6Q=");
_c = DraggablePost;
var _c;
__turbopack_context__.k.register(_c, "DraggablePost");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$post$2f$PostAnimation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/post/PostAnimation.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$post$2f$DraggablePost$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/post/DraggablePost.tsx [app-client] (ecmascript)"); // ← 追加
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const TankaEditor = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(32);
    if ($[0] !== "77f0d7854386ef0c27ebc9de5c137f79180c26573cd6ca0c05f0187275d9fd02") {
        for(let $i = 0; $i < 32; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "77f0d7854386ef0c27ebc9de5c137f79180c26573cd6ca0c05f0187275d9fd02";
    }
    const { sections, inputRefs, handleChange, LIMITS } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTankaEditor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTankaEditor"])();
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("editing");
    const isComplete = Object.keys(LIMITS).every((key)=>sections[key].length === LIMITS[key]);
    let t0;
    if ($[1] !== isComplete) {
        t0 = ()=>{
            if (isComplete) {
                setStatus("animating");
            }
        };
        $[1] = isComplete;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    const handlePost = t0;
    let t1;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ()=>{
            setStatus("viewing");
        };
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const handleAnimationComplete = t1;
    let t2;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ()=>{
            setStatus("editing");
        };
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const handleDiscard = t2;
    if (status === "animating") {
        let t3;
        if ($[5] !== sections) {
            t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$post$2f$PostAnimation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PostAnimation"], {
                sections: sections,
                onComplete: handleAnimationComplete
            }, void 0, false, {
                fileName: "[project]/src/components/editor/TankaEditor.tsx",
                lineNumber: 65,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[5] = sections;
            $[6] = t3;
        } else {
            t3 = $[6];
        }
        return t3;
    }
    if (status === "viewing") {
        let t3;
        if ($[7] !== sections) {
            t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$post$2f$DraggablePost$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DraggablePost"], {
                sections: sections,
                onDelete: handleDiscard
            }, void 0, false, {
                fileName: "[project]/src/components/editor/TankaEditor.tsx",
                lineNumber: 76,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[7] = sections;
            $[8] = t3;
        } else {
            t3 = $[8];
        }
        return t3;
    }
    let t3;
    if ($[9] !== LIMITS) {
        t3 = Object.keys(LIMITS);
        $[9] = LIMITS;
        $[10] = t3;
    } else {
        t3 = $[10];
    }
    const t4 = t3;
    let t5;
    if ($[11] !== LIMITS || $[12] !== handleChange || $[13] !== inputRefs || $[14] !== sections || $[15] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap gap-4 items-end justify-center",
            children: t4.map((key_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
                            className: "text-[10px] text-slate-400 font-medium uppercase tracking-widest",
                            children: LIMITS[key_0]
                        }, void 0, false, {
                            fileName: "[project]/src/components/editor/TankaEditor.tsx",
                            lineNumber: 95,
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
                            lineNumber: 95,
                            columnNumber: 269
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, key_0, true, {
                    fileName: "[project]/src/components/editor/TankaEditor.tsx",
                    lineNumber: 95,
                    columnNumber: 90
                }, ("TURBOPACK compile-time value", void 0)))
        }, void 0, false, {
            fileName: "[project]/src/components/editor/TankaEditor.tsx",
            lineNumber: 95,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = LIMITS;
        $[12] = handleChange;
        $[13] = inputRefs;
        $[14] = sections;
        $[15] = t4;
        $[16] = t5;
    } else {
        t5 = $[16];
    }
    let t6;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-slate-400 mb-4 font-light tracking-widest",
            children: "PREVIEW"
        }, void 0, false, {
            fileName: "[project]/src/components/editor/TankaEditor.tsx",
            lineNumber: 112,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[17] = t6;
    } else {
        t6 = $[17];
    }
    let t7;
    if ($[18] !== sections) {
        t7 = Object.values(sections).filter(Boolean);
        $[18] = sections;
        $[19] = t7;
    } else {
        t7 = $[19];
    }
    const t8 = t7.join("\u3000");
    let t9;
    if ($[20] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center",
            children: [
                t6,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-lg tracking-wider text-slate-600 font-serif",
                    children: t8
                }, void 0, false, {
                    fileName: "[project]/src/components/editor/TankaEditor.tsx",
                    lineNumber: 128,
                    columnNumber: 43
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/editor/TankaEditor.tsx",
            lineNumber: 128,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[20] = t8;
        $[21] = t9;
    } else {
        t9 = $[21];
    }
    const t10 = !isComplete;
    const t11 = `
            px-8 py-3 rounded-full text-sm font-bold tracking-widest transition-all duration-500
            ${isComplete ? "bg-slate-900 text-white hover:bg-slate-700 translate-y-0 opacity-100 shadow-lg" : "bg-slate-200 text-slate-400 translate-y-4 opacity-0 cursor-not-allowed"}
          `;
    let t12;
    if ($[22] !== handlePost || $[23] !== t10 || $[24] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: handlePost,
            disabled: t10,
            className: t11,
            children: "詠む"
        }, void 0, false, {
            fileName: "[project]/src/components/editor/TankaEditor.tsx",
            lineNumber: 141,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[22] = handlePost;
        $[23] = t10;
        $[24] = t11;
        $[25] = t12;
    } else {
        t12 = $[25];
    }
    let t13;
    if ($[26] !== t12 || $[27] !== t9) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center gap-8",
            children: [
                t9,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/editor/TankaEditor.tsx",
            lineNumber: 151,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[26] = t12;
        $[27] = t9;
        $[28] = t13;
    } else {
        t13 = $[28];
    }
    let t14;
    if ($[29] !== t13 || $[30] !== t5) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-12 p-6 w-full max-w-3xl mx-auto animate-in fade-in duration-500",
            children: [
                t5,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/editor/TankaEditor.tsx",
            lineNumber: 160,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[29] = t13;
        $[30] = t5;
        $[31] = t14;
    } else {
        t14 = $[31];
    }
    return t14;
};
_s(TankaEditor, "F9njriJo4RbAratInVqCsJZetd4=", false, function() {
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

//# sourceMappingURL=src_33a13e6f._.js.map