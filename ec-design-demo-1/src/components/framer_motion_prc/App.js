import { Body } from "./Body";
import styles from "./styles.module.css";
// 外部
import Lenis from "@studio-freight/lenis";
import { motion, useScroll, useSpring } from "framer-motion";

export const App = () => {
  const lenis = new Lenis();

  // 慣性スクロール
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  // 引数に実行したい関数を渡すだけでその関数がブラウザにとって最適なタイミングで処理されるようになる
  // 参考URL:https://blog.leap-in.com/use-requestanimtionframe/
  requestAnimationFrame(raf);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div className={styles["progress-bar"]} style={{ scaleX }} />
      <Body />
    </>
  );
};
