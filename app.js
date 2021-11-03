const Koa = require("koa");
const Router = require("koa-router");
const Static = require("koa-static");
const koaBody = require("koa-body");
const app = new Koa();

const router = new Router();

app.use(
  koaBody({
    multipart: true,
  })
);
app.use(Static(__dirname + "/src"));

// 后端设置cors请求
app.use(async (ctx, next) => {
  ctx.set("Access-Control-Allow-Origin", "*");
  // ctx.set('Access-Control-Allow-Origin','http://localhost:3000,http://192.168.8.71:3000');
  ctx.set(
    "Access-Control-Allow-Headers",
    "Authorization,Content-Type,Content-Length,devid,ver,platform,authtoken,authtm,key"
  );
  // ctx.append('result','co');
  ctx.set("Access-Control-Allow-Methods", "OPTIONS, GET, PUT, POST, DELETE");

  if (ctx.method == "OPTIONS") {
    ctx.body = 200;
  } else {
    next();
  }
});

router.get("/login", (ctx) => {
  const { username, password } = ctx.request.query;
  if (username === "admin" && password === "123456") {
    ctx.body = {
      code: 200,
      data: {
        message: "请求成功",
      },
    };
  } else {
    ctx.body = {
      code: 201,
      data: {
        message: "获取数据失败",
      },
    };
  }
});

router.post("/list", (ctx) => {
  const userdata = [
    {
      name: "mike",
      age: 28,
      selected: false,
    },
    {
      name: "joe",
      age: 28,
      selected: true,
    },
    {
      name: "jake",
      age: 29,
      selected: false,
    },
  ];
  ctx.body = userdata;
});
app.use(router.routes());

app.listen(8001, () => {
  console.log("http://47.119.131.63:8001");
});
