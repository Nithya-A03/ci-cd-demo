const http = require('http');
http.createServer((req, res) => {
res.writeHead(200, { 'Content-Type': 'text/html' });
res.end(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Docker CI/CD Server - Student Lab</title>
        <style>
          body { 
            font-family: Arial, sans-serif; 
            text-align: center; 
            margin: 50px; 
            background-color: #f9f9f9; 
          }
          h1 { color: #333; }
          p { color: #555; }
          .student-info {
            text-align: left;
            display: inline-block;
            margin-top: 30px;
            background: #e0e0e0;
            padding: 20px;
            border-radius: 8px;


          }
          .student-info h2 {
            margin-top: 0;
          }
        </style>
      </head>
      <body>
        <h1>Hello from Docker CI/CD!</h1>
        <p>This server is running using Node.js</p>

         <div class="student-info">
        <h2>Employee Details</h2>
  <p><strong>Name:</strong>R.PRAVEENA</p>
  <p><strong>Roll No.:</strong>0987</p>
  <p><strong>Course:</strong> MCA COMPUTER APPLICATION</p>
  <p><strong>Subject:</strong>WEB TECHNOLOGY</p>
  <p><strong>Experiment:</strong>IMPLEMENTING THE MUSIC TEMPLATE</p>
</div>
</body>
</html>
  `);
}).listen(3000, '0.0.0.0', () => {
  console.log('Server running at http://localhost:3000');
});

