# 1 Terminal Command

## 1.1 React create

- normal setup
npx create-react-app file-name
cd [file-name]
code .
npx start

- vite setup
npm install --save-dev vite @vitejs/plugin-react

npm run build

npm run preview  

## 1.2 Library install

### 1.2.1 Router download

npm i react-router-dom

## 1.2.3 Bootstrap

npm install react-bootstrap bootstrap

## 1.2.3 BoxIcons

npm install boxicons --save

## 1.2.4 framer-motion

npm i framer-motion

<!-- ドキュメント -->
<!-- https://reffect.co.jp/react/framer-motion -->
<!-- https://www.framer.com/motion/ -->

## 1.2.5 Lenis

慣性スクロールを実現する  

npm i framer-motion @studio-freight/lenis

## 1.2.6 Typescript

npm install @types/react @types/react-dom

## 1.2.7 Material UI

npm install @mui/material @emotion/react @emotion/styled

<!-- ドキュメント -->
https://mui.com/material-ui/getting-started/installation/

### 1.2.8 Material Symbols

Googleが提供するフォントパッケージ

npm install material-symbols@latest

---

# 2 JS

let mainImage = document.querySelector(".carousel-item");
let subImage = [...document.querySelectorAll(".image")];

//ある特定の位置を超えると作動する関数
let setItemActive = (entries) => {
  entries.map((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active-1");
    }
  });
};

//具体的にいつ発動させるのかを決めるオプション
let options = {
  rootMargin: "0px", //デフォルトで０.marginとほぼ同じ。
  threshold: 0.5, //閾値は0.2。これが１になると完全に画面におさまってから発動する
};

//監視
let observer = new IntersectionObserver(setItemActive, options);
observer.observe(mainImage);

//複数の.imageが読み込まれるたびに.active-1を付与する
subImage.map((image) => {
    observer.observe(image);
});

---

# 3 CSS

css フォルダ構成のベストプラクティス
https://kinsta.com/jp/blog/react-best-practices/

コンポーネントライブラリ

    Material UI
    Ant-design
    React Bootstrap
    Semantic UI React

---

# 5 TypeScipt

## 5.1 Eventの型まとめ  

https://zenn.dev/kenta0313/articles/a39fb1d8edc3a4

## 5.2 オプションパラメータ

https://zenn.dev/oreo2990/articles/3d780560c5e552

## 5.3 論理積、論理和

https://zenn.dev/nrikiji/articles/914e13da25caed

---

# 77 Headタグ
./public/index.htmlディレクトリで設定されている

---

## 88 メモ

- module.cssを使用したハイフンクラス名の指定の仕方  
className={styles['progress-bar']}

---

# 99 参考URL
