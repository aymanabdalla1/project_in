## Deployment

- Clone repository:
```bash
git clone https://github.com/m0rniac/reactjs-blogsite
```
```bash
cd reactjs-blogsite/
```

- Install dependencies:
```bash
npm install
```

.
- Run project (for testing):
```bash
npm run dev
```
or
- Build project (for production):
```bash
npm run build
```

.
## About 'BUILD'

The project uses the **13.4.4** version of NextJS, which in production generates the `.next` folder by default (without `index.html` file).

In some cases it could complicate the deploy, to change the build mode and generate a Static Project (with `index.html` file) you must uncheck ***"output: 'export'"*** in the `next.config.js` file like so:


```javascript
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
}
```


This will create an `out` folder with the file "index.html" just like a ReactJS build. It should be mentioned that in some cases this modification could affect some functionalities of the project

### More info:
- [NextJS: Static Export](https://nextjs.org/docs/pages/building-your-application/deploying/static-exports)
- [NextJS: Static Site Generation](https://nextjs.org/docs/pages/building-your-application/rendering/static-site-generation)
- [NextJS: Static & Dynamic Rendering](https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic-rendering)

