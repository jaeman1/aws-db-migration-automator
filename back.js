const express = require("express");
const bodyParser = require("body-parser");
const { exec } = require("child_process");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public")); // 정적 파일을 제공할 디렉토리 설정 (예: CSS, JavaScript)

// 루트 경로에 대한 GET 요청 처리
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html"); // index.html 파일 전송
});

// POST 요청에 대한 처리
app.post("/process-input", (req, res) => {
  const { endpoint, masterName, masterPassword, dbName, sqlFilePath } =
    req.body;

  // MySQL import 명령어 생성
  const importCommand = `mysql -h ${endpoint} -u ${masterName} -p${masterPassword} ${dbName} < "${sqlFilePath}"`;

  console.log("MySQL import command create complete:", importCommand);

  // MySQL import 명령어 실행
  exec(importCommand, (error, stdout, stderr) => {
    if (error) {
      console.error("error~!~!:", error);
      res.status(500).send("error0????00");
      return;
    }
    console.log("successful import.");
    res.status(200).send("SQL file successful import.");
  });
});

// 서버 시작
app.listen(3000, () => {
  console.log("server start");
});
