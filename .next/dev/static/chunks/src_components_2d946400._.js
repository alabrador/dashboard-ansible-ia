(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/robot-3d-scene.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Robot3DScene",
    ()=>Robot3DScene
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$CameraShake$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/CameraShake.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/OrbitControls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Stage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Stage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$useAnimations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/useAnimations.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Gltf.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const BASE_MODEL_SCALE = 0.8;
function RobotModel({ lookX, lookY, isSmiling }) {
    _s();
    const robotRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { scene, animations } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGLTF"])("/models/robot-draco.glb");
    const { actions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$useAnimations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimations"])(animations, scene);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RobotModel.useEffect": ()=>{
            const idleAction = actions.Idle;
            if (idleAction) {
                idleAction.reset().fadeIn(0.25).play();
            }
            scene.traverse({
                "RobotModel.useEffect": (obj)=>{
                    if (obj.isMesh) {
                        obj.castShadow = true;
                        obj.receiveShadow = true;
                    }
                }
            }["RobotModel.useEffect"]);
            return ({
                "RobotModel.useEffect": ()=>{
                    if (idleAction) {
                        idleAction.fadeOut(0.2);
                    }
                }
            })["RobotModel.useEffect"];
        }
    }["RobotModel.useEffect"], [
        actions,
        scene
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "RobotModel.useFrame": (_, delta)=>{
            if (robotRef.current) {
                const targetY = lookX * 0.22;
                const targetX = lookY * -0.14;
                const targetScale = BASE_MODEL_SCALE * (isSmiling ? 1.045 : 1);
                robotRef.current.rotation.y = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].lerp(robotRef.current.rotation.y, targetY, delta * 4.5);
                robotRef.current.rotation.x = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].lerp(robotRef.current.rotation.x, targetX, delta * 4.5);
                robotRef.current.scale.x = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].lerp(robotRef.current.scale.x, targetScale, delta * 8);
                robotRef.current.scale.y = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].lerp(robotRef.current.scale.y, targetScale, delta * 8);
                robotRef.current.scale.z = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].lerp(robotRef.current.scale.z, targetScale, delta * 8);
            }
        }
    }["RobotModel.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("primitive", {
        ref: robotRef,
        object: scene,
        position: [
            0,
            -0.12,
            0
        ],
        scale: BASE_MODEL_SCALE
    }, void 0, false, {
        fileName: "[project]/src/components/robot-3d-scene.tsx",
        lineNumber: 62,
        columnNumber: 10
    }, this);
}
_s(RobotModel, "+VCev5tfaLIgoO/my7lYRs7zyGk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGLTF"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$useAnimations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimations"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c = RobotModel;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGLTF"].preload("/models/robot-draco.glb");
function Robot3DScene({ lookX, lookY, theme, isSmiling }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
        dpr: [
            2,
            3
        ],
        shadows: true,
        camera: {
            position: [
                0,
                0.2,
                3.8
            ],
            fov: 45
        },
        gl: {
            antialias: true,
            alpha: true,
            powerPreference: "high-performance"
        },
        className: "h-full w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
                fallback: null,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Stage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stage"], {
                    adjustCamera: 1.15,
                    intensity: theme === "dark" ? 1.1 : 0.95,
                    environment: theme === "dark" ? "city" : "studio",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RobotModel, {
                        lookX: lookX,
                        lookY: lookY,
                        isSmiling: isSmiling
                    }, void 0, false, {
                        fileName: "[project]/src/components/robot-3d-scene.tsx",
                        lineNumber: 82,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/robot-3d-scene.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/robot-3d-scene.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrbitControls"], {
                makeDefault: true,
                enablePan: false,
                enableZoom: false,
                minPolarAngle: Math.PI / 2.2,
                maxPolarAngle: Math.PI / 1.8,
                minAzimuthAngle: -0.65,
                maxAzimuthAngle: 0.65
            }, void 0, false, {
                fileName: "[project]/src/components/robot-3d-scene.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$CameraShake$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CameraShake"], {
                maxYaw: 0.1,
                maxPitch: 0.05,
                maxRoll: 0.05,
                yawFrequency: 0.05,
                pitchFrequency: 0.2,
                rollFrequency: 0.2,
                intensity: 0.55,
                decayRate: 0.65
            }, void 0, false, {
                fileName: "[project]/src/components/robot-3d-scene.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/robot-3d-scene.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
}
_c1 = Robot3DScene;
var _c, _c1;
__turbopack_context__.k.register(_c, "RobotModel");
__turbopack_context__.k.register(_c1, "Robot3DScene");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/floating-robot-bot.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FloatingRobotBot",
    ()=>FloatingRobotBot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$robot$2d$3d$2d$scene$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/robot-3d-scene.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function FloatingRobotBot() {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSmiling, setIsSmiling] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [headline, setHeadline] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoadingNews, setIsLoadingNews] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newsError, setNewsError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [weatherTip, setWeatherTip] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showWeatherTip, setShowWeatherTip] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "FloatingRobotBot.useState": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const savedTheme = window.localStorage.getItem("dashboard-theme");
            return savedTheme === "light" ? "light" : "dark";
        }
    }["FloatingRobotBot.useState"]);
    const smileTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const recentHeadlineKeysRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const newsItemsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FloatingRobotBot.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const onStorage = {
                "FloatingRobotBot.useEffect.onStorage": ()=>{
                    const savedTheme = window.localStorage.getItem("dashboard-theme");
                    if (savedTheme === "dark" || savedTheme === "light") {
                        setTheme(savedTheme);
                    }
                }
            }["FloatingRobotBot.useEffect.onStorage"];
            window.addEventListener("storage", onStorage);
            const intervalId = window.setInterval(onStorage, 1000);
            return ({
                "FloatingRobotBot.useEffect": ()=>{
                    window.removeEventListener("storage", onStorage);
                    window.clearInterval(intervalId);
                }
            })["FloatingRobotBot.useEffect"];
        }
    }["FloatingRobotBot.useEffect"], []);
    const bubbleClass = theme === "dark" ? "bg-zinc-900/95 text-zinc-100" : "bg-white/95 text-zinc-900";
    const pickHeadline = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "FloatingRobotBot.useCallback[pickHeadline]": (items, currentLink)=>{
            if (!items.length) {
                return null;
            }
            const recentKeys = recentHeadlineKeysRef.current;
            const availableItems = items.filter({
                "FloatingRobotBot.useCallback[pickHeadline].availableItems": (item)=>!recentKeys.includes(item.link) && item.link !== currentLink
            }["FloatingRobotBot.useCallback[pickHeadline].availableItems"]);
            const pool = availableItems.length > 0 ? availableItems : items.filter({
                "FloatingRobotBot.useCallback[pickHeadline]": (item)=>item.link !== currentLink
            }["FloatingRobotBot.useCallback[pickHeadline]"]);
            const finalPool = pool.length > 0 ? pool : items;
            const randomIndex = Math.floor(Math.random() * finalPool.length);
            const selectedItem = finalPool[randomIndex] ?? null;
            if (selectedItem) {
                const nextRecentKeys = [
                    ...recentKeys,
                    selectedItem.link
                ];
                const maxRemembered = Math.min(items.length, 12);
                recentHeadlineKeysRef.current = nextRecentKeys.slice(-maxRemembered);
            }
            return selectedItem;
        }
    }["FloatingRobotBot.useCallback[pickHeadline]"], []);
    const loadNews = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "FloatingRobotBot.useCallback[loadNews]": async ()=>{
            setIsLoadingNews(true);
            setNewsError("");
            try {
                const response = await fetch("/api/news", {
                    cache: "no-store"
                });
                const payload = await response.json();
                if (!response.ok || !payload.items?.length) {
                    setNewsError(payload.error ?? "No pude traer noticias ahora.");
                    newsItemsRef.current = [];
                    setHeadline(null);
                    return;
                }
                const items = payload.items;
                newsItemsRef.current = items;
                setHeadline({
                    "FloatingRobotBot.useCallback[loadNews]": (current)=>pickHeadline(items, current?.link)
                }["FloatingRobotBot.useCallback[loadNews]"]);
            } catch  {
                setNewsError("No pude conectar con el servicio de noticias.");
                newsItemsRef.current = [];
                setHeadline(null);
            } finally{
                setIsLoadingNews(false);
            }
        }
    }["FloatingRobotBot.useCallback[loadNews]"], [
        pickHeadline
    ]);
    const loadWeather = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "FloatingRobotBot.useCallback[loadWeather]": async ()=>{
            try {
                const response = await fetch("/api/weather", {
                    cache: "no-store"
                });
                const payload = await response.json();
                if (!response.ok || !payload.tip) {
                    setWeatherTip(null);
                    return;
                }
                setWeatherTip(payload.tip);
            } catch  {
                setWeatherTip(null);
            }
        }
    }["FloatingRobotBot.useCallback[loadWeather]"], []);
    const handleRobotClick = ()=>{
        setIsOpen((current)=>!current);
        setIsSmiling(true);
        if (smileTimeoutRef.current) {
            clearTimeout(smileTimeoutRef.current);
        }
        smileTimeoutRef.current = setTimeout(()=>{
            setIsSmiling(false);
            smileTimeoutRef.current = null;
        }, 1400);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FloatingRobotBot.useEffect": ()=>{
            if (!isOpen) {
                return;
            }
            void loadNews();
            void loadWeather();
            setShowWeatherTip(Math.random() < 0.45);
            const rotateInterval = window.setInterval({
                "FloatingRobotBot.useEffect.rotateInterval": ()=>{
                    if (!newsItemsRef.current.length) {
                        return;
                    }
                    setHeadline({
                        "FloatingRobotBot.useEffect.rotateInterval": (current)=>pickHeadline(newsItemsRef.current, current?.link)
                    }["FloatingRobotBot.useEffect.rotateInterval"]);
                    setShowWeatherTip(Math.random() < 0.45);
                }
            }["FloatingRobotBot.useEffect.rotateInterval"], 12000);
            const refreshInterval = window.setInterval({
                "FloatingRobotBot.useEffect.refreshInterval": ()=>{
                    void loadNews();
                }
            }["FloatingRobotBot.useEffect.refreshInterval"], 90000);
            const weatherRefreshInterval = window.setInterval({
                "FloatingRobotBot.useEffect.weatherRefreshInterval": ()=>{
                    void loadWeather();
                }
            }["FloatingRobotBot.useEffect.weatherRefreshInterval"], 1800000);
            return ({
                "FloatingRobotBot.useEffect": ()=>{
                    window.clearInterval(rotateInterval);
                    window.clearInterval(refreshInterval);
                    window.clearInterval(weatherRefreshInterval);
                }
            })["FloatingRobotBot.useEffect"];
        }
    }["FloatingRobotBot.useEffect"], [
        isOpen,
        loadNews,
        loadWeather,
        pickHeadline
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FloatingRobotBot.useEffect": ()=>{
            return ({
                "FloatingRobotBot.useEffect": ()=>{
                    if (smileTimeoutRef.current) {
                        clearTimeout(smileTimeoutRef.current);
                    }
                }
            })["FloatingRobotBot.useEffect"];
        }
    }["FloatingRobotBot.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pointer-events-none fixed bottom-6 right-4 z-50 flex flex-col items-end sm:bottom-8 sm:right-5",
        children: [
            isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `pointer-events-auto mb-3 w-[170px] rounded-xl px-2.5 py-2 text-[11px] shadow-[0_16px_32px_-18px_rgba(14,165,233,0.7)] sm:mb-4 sm:w-[190px] ${bubbleClass}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-semibold",
                        children: "Asistente"
                    }, void 0, false, {
                        fileName: "[project]/src/components/floating-robot-bot.tsx",
                        lineNumber: 179,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-0.5 opacity-90",
                        children: "Hola pana 👋"
                    }, void 0, false, {
                        fileName: "[project]/src/components/floating-robot-bot.tsx",
                        lineNumber: 180,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2",
                        children: [
                            isLoadingNews ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "opacity-80",
                                children: "Buscando titulares..."
                            }, void 0, false, {
                                fileName: "[project]/src/components/floating-robot-bot.tsx",
                                lineNumber: 183,
                                columnNumber: 30
                            }, this) : null,
                            !isLoadingNews && newsError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "opacity-80",
                                children: newsError
                            }, void 0, false, {
                                fileName: "[project]/src/components/floating-robot-bot.tsx",
                                lineNumber: 184,
                                columnNumber: 44
                            }, this) : null,
                            !isLoadingNews && !newsError && headline ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: headline.link,
                                target: "_blank",
                                rel: "noreferrer",
                                className: "block rounded-lg bg-black/5 px-2 py-2 leading-snug transition hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10",
                                children: headline.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/floating-robot-bot.tsx",
                                lineNumber: 186,
                                columnNumber: 15
                            }, this) : null,
                            !isLoadingNews && !newsError && weatherTip && showWeatherTip ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 rounded-lg bg-black/5 px-2 py-1.5 leading-snug opacity-90 dark:bg-white/5",
                                children: weatherTip
                            }, void 0, false, {
                                fileName: "[project]/src/components/floating-robot-bot.tsx",
                                lineNumber: 196,
                                columnNumber: 15
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/floating-robot-bot.tsx",
                        lineNumber: 182,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/floating-robot-bot.tsx",
                lineNumber: 178,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: handleRobotClick,
                "aria-label": isOpen ? "Ocultar noticias" : "Mostrar noticias",
                className: "pointer-events-auto relative h-36 w-36 overflow-visible rounded-2xl bg-transparent transition-transform duration-150 [transform:translateZ(0)] sm:h-40 sm:w-40",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute -inset-3 rounded-full bg-cyan-400/20 blur-xl"
                    }, void 0, false, {
                        fileName: "[project]/src/components/floating-robot-bot.tsx",
                        lineNumber: 208,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute -inset-3 overflow-visible rounded-2xl",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$robot$2d$3d$2d$scene$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Robot3DScene"], {
                            lookX: 0,
                            lookY: 0,
                            theme: theme,
                            isSmiling: isSmiling
                        }, void 0, false, {
                            fileName: "[project]/src/components/floating-robot-bot.tsx",
                            lineNumber: 210,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/floating-robot-bot.tsx",
                        lineNumber: 209,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/floating-robot-bot.tsx",
                lineNumber: 202,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/floating-robot-bot.tsx",
        lineNumber: 176,
        columnNumber: 5
    }, this);
}
_s(FloatingRobotBot, "ur7YotF2dhLZccbH/bvz24ovsWI=");
_c = FloatingRobotBot;
var _c;
__turbopack_context__.k.register(_c, "FloatingRobotBot");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_2d946400._.js.map