# Веб-технологии. Лабораторная работа № 1. # 
# Ильин Г.Б. ИУ7-68Б(В)  #

## Задание: ##
https://docs.google.com/document/d/12X1aQF72_Hr9OeTsHcBjE4W9VzQsZgoD3Vlcf0BZ24U


# 1. 	Базовая часть работы #
## 1.1.  Цель данной работы – ознакомится с применением протокола HTTP на практике, в реальных системах. Каждый из рассмотренных типов запросов предлагается отправить на несколько известных интернет-сервисов. Впрочем, сервисы указаны лишь как примеры и при желании вы можете выбрать другие (социальные сети, почта, облака, новостные сайты и т.д.).##  
## 1.2.  С помощью специального ПО (Postman, либо многочисленные аналоги, например, Restlet Clent - расширение для Chrome) вручную отправить следующие запросы и ответить на предлагаемые вопросы. ##

1.2.1.   Запрос OPTIONS. Отправьте запрос на http://mail.ru, http://ya.ru, www.rambler.ru, https://www.google.ru, https://github.com/,   www.apple.com/. 


http://mail.ru
200 OK
Server →nginx/1.14.1
Date →Fri, 22 Mar 2019 06:15:54 GMT
Content-Type →text/html; charset=utf-8
Transfer-Encoding →chunked
Connection →keep-alive
Cache-Control →no-cache,no-store,must-revalidate
Pragma →no-cache
Expires →Thu, 22 Mar 2018 06:15:54 GMT
Last-Modified →Fri, 22 Mar 2019 09:15:54 GMT
Content-Security-Policy →default-src mail.ru *.mail.ru *.imgsmail.ru *.mradx.net *.serving-sys.com *.moatads.com *.doubleverify.com *.adsafeprotected.com; script-src 'unsafe-inline' 'unsafe-eval' mail.ru *.mail.ru *.imgsmail.ru *.mradx.net *.odnoklassniki.ru ok.ru *.doubleverify.com *.dvtps.com *.doubleclick.net *.googletagservices.com *.googlesyndication.com *.googleadservices.com *.moatads.com *.adlooxtracking.com *.adsafeprotected.com *.serving-sys.com; img-src data: blob: *; style-src 'unsafe-inline' 'unsafe-eval' blob: *.mail.ru *.imgsmail.ru *.mradx.net; font-src data: blob: https: *.mail.ru *.imgsmail.ru *.mradx.net; frame-src mail.ru *.mail.ru *.mradx.net *.doubleverify.com *.doubleclick.net ok.ru *.ok.ru; child-src mail.ru *.mail.ru *.mradx.net *.doubleverify.com *.doubleclick.net ok.ru *.ok.ru; report-uri https://cspreport.mail.ru/splash;
X-Frame-Options →SAMEORIGIN
X-XSS-Protection →1; mode=block; report=https://cspreport.mail.ru/xxssprotection
X-Content-Type-Options →nosniff
Strict-Transport-Security →max-age=16070400
Content-Encoding →gzip


http://ya.ru
403 Forbidden
Date →Fri, 22 Mar 2019 06:34:47 GMT
Content-Type →text/html; charset=utf-8
ETag →W/"5c9251d5-3077"
Content-Encoding →gzip
X-Content-Type-Options →nosniff
Transfer-Encoding →chunked


www.rambler.ru
403 Forbidden
Server →nginx
Date →Fri, 22 Mar 2019 06:35:32 GMT
Content-Type →text/html; charset=utf-8
Transfer-Encoding →chunked
Connection →keep-alive
Keep-Alive →timeout=50
Last-Modified →Wed, 30 Jan 2019 09:20:08 GMT
Vary →Accept-Encoding
ETag →W/"5c516c48-2aeb"
Content-Encoding →gzip
X-Cache →REVALIDATED


https://www.google.ru
405 Method Not Allowed
Allow →GET, HEAD
Date →Fri, 22 Mar 2019 06:37:10 GMT
Content-Type →text/html; charset=UTF-8
Server →gws
Content-Length →1592
X-XSS-Protection →1; mode=block
X-Frame-Options →SAMEORIGIN
Alt-Svc →quic=":443"; ma=2592000; v="46,44,43,39"


https://github.com/
404 Not Found
Date →Fri, 22 Mar 2019 06:37:53 GMT
Content-Type →text/html; charset=utf-8
Content-Length →0
Server →GitHub.com
Status →404 Not Found
X-Request-Id →f80c1b86-f021-42a9-91c2-ba616b82a2b2
Strict-Transport-Security →max-age=31536000; includeSubdomains; preload
X-Frame-Options →deny
X-Content-Type-Options →nosniff
X-XSS-Protection →1; mode=block
Referrer-Policy →origin-when-cross-origin, strict-origin-when-cross-origin
Expect-CT →max-age=2592000, report-uri="https://api.github.com/_private/browser/errors"
Content-Security-Policy →default-src 'none'; base-uri 'self'; block-all-mixed-content; connect-src 'self' uploads.github.com www.githubstatus.com collector.githubapp.com api.github.com www.google-analytics.com github-cloud.s3.amazonaws.com github-production-repository-file-5c1aeb.s3.amazonaws.com github-production-upload-manifest-file-7fdce7.s3.amazonaws.com github-production-user-asset-6210df.s3.amazonaws.com; font-src github.githubassets.com; form-action 'self' github.com gist.github.com; frame-ancestors 'none'; frame-src render.githubusercontent.com; img-src 'self' data: github.githubassets.com media.githubusercontent.com camo.githubusercontent.com identicons.github.com collector.githubapp.com avatars0.githubusercontent.com avatars1.githubusercontent.com avatars2.githubusercontent.com avatars3.githubusercontent.com github-cloud.s3.amazonaws.com; manifest-src 'self'; media-src 'none'; script-src github.githubassets.com; style-src 'unsafe-inline' github.githubassets.com
X-GitHub-Request-Id →231B:468BE:201841A:2F60B99:5C9482C1


www.apple.com/
200 OK
Server →Apache
Content-Type →text/html; charset=UTF-8
X-Frame-Options →SAMEORIGIN
X-Content-Type-Options →nosniff
X-Xss-Protection →1; mode=block
Vary →Accept-Encoding
Content-Encoding →gzip
Cache-Control →max-age=212
Expires →Fri, 22 Mar 2019 06:42:15 GMT
Date →Fri, 22 Mar 2019 06:38:43 GMT
Content-Length →7978
Connection →keep-alive


Для чего используется запрос OPTIONS?

Используется для определения возможностей веб-сервера или параметров соединения для конкретного ресурса. В ответ серверу следует включить заголовок Allow со списком поддерживаемых методов. Также в заголовке ответа может включаться информация о поддерживаемых расширениях. 
Предполагается, что запрос клиента может содержать тело сообщения для указания интересующих его сведений. Формат тела и порядок работы с ним в настоящий момент не определён; сервер пока должен его игнорировать. Аналогичная ситуация и с телом в ответе сервера. 
Для того, чтобы узнать возможности всего сервера, клиент должен указать в URI звёздочку — «*». Запросы «OPTIONS * HTTP/1.1» могут также применяться для проверки работоспособности сервера (аналогично «пингованию») и тестирования на предмет поддержки сервером протокола HTTP версии 1.1. 
Результат выполнения этого метода не кэшируется. 

Какие коды ответов приходят при этом запросе? 

200, 403-405

Какие сайты правильно обработали запрос и вернули ожидаемые данные?

https://www.google.ru


1.2.2.   Запрос HEAD.  vk.com, www.apple.com, www.msn.com.

vk.com
418 I'm a teapot (RFC 2324)
Server →Internet Information Services
Date →Fri, 22 Mar 2019 06:44:38 GMT
Content-Length →0
Connection →keep-alive
X-Frontend →front504214
Access-Control-Expose-Headers →X-Frontend

www.apple.com
200 OK
ETag →"KXKKJLLKHIRVUPWPX"
Server →Apache
X-Frame-Options →SAMEORIGIN
X-Xss-Protection →1; mode=block
Accept-Ranges →bytes
X-Content-Type-Options →nosniff
Content-Type →text/html; charset=UTF-8
Vary →Accept-Encoding
Content-Encoding →gzip
Cache-Control →max-age=77
Expires →Fri, 22 Mar 2019 06:47:55 GMT
Date →Fri, 22 Mar 2019 06:46:38 GMT
Content-Length →7978
Connection →keep-alive

www.msn.com
200 OK
Cache-Control →no-cache, no-store, no-transform
Pragma →no-cache
Content-Length →16309
Content-Type →text/html; charset=utf-8
Content-Encoding →gzip
Expires →-1
Vary →User-Agent
Set-Cookie →PreferencesMsn=eyJIb21lUGFnZSI6eyJTdHJpcGVzIjpbXSwiTWVTdHJpcGVNb2R1bGVzIjpbXSwiTWFya2V0Q29uZmlndXJhdGlvbiI6eyJNYXJrZXQiOiJydS1ydSIsIlN1cHByZXNzUHJvbXB0IjpmYWxzZSwiUHJlZmVycmVkTGFuZ3VhZ2VDb2RlIjoicnUtcnUiLCJDb3VudHJ5Q29kZSI6IlJVIn19LCJFeHBpcnlUaW1lIjo2MzcyMDQ1NjQzODUyNzI2MDUsIlZlcnNpb24iOjF90; domain=msn.com; expires=Sun, 22-Mar-2020 06:47:18 GMT; path=/; HttpOnly
Set-Cookie →marketPref=ru-ru; domain=msn.com; expires=Sun, 22-Mar-2020 06:47:18 GMT; path=/; HttpOnly
Set-Cookie →_EDGE_S=F=1; path=/; httponly; domain=msn.com
Set-Cookie →_EDGE_V=1; path=/; httponly; expires=Wed, 15-Apr-2020 06:47:18 GMT; domain=msn.com
Set-Cookie →MUID=1E2D17753DD7648D3F2F1A523CCF65C0; path=/; expires=Wed, 15-Apr-2020 06:47:18 GMT; domain=msn.com
Access-Control-Allow-Origin →*
X-AspNetMvc-Version →5.2
X-AppVersion →20190315_14902388
X-Activity-Id →07ab0ed5-913c-4349-ba5b-970bd84942c3
X-Az →{did:b24a0ea2b3ba45a59fc1d4d299c5ebc1, rid: 17, sn: neurope-prod-hp, dt: 2019-03-02T12:07:29.1890627Z, bt: 2019-03-16T00:14:55.6637098Z}
X-UA-Compatible →IE=Edge;chrome=1
X-Content-Type-Options →nosniff
X-FRAME-OPTIONS →SAMEORIGIN
X-Powered-By →ASP.NET
Access-Control-Allow-Methods →HEAD,GET,OPTIONS
X-XSS-Protection →1
X-MSEdge-Ref →Ref A: 07AB0ED5913C4349BA5B970BD84942C3 Ref B: AMSEDGE0312 Ref C: 2019-03-22T06:47:18Z
Date →Fri, 22 Mar 2019 06:47:17 GMT


Для чего нужен запрос HEAD? 

Аналогичен методу GET, за исключением того, что в ответе сервера отсутствует тело. Запрос HEAD обычно применяется для извлечения метаданных, проверки наличия ресурса (валидация URL) и чтобы узнать, не изменился ли он с момента последнего обращения. 
Заголовки ответа могут кэшироваться. При несовпадении метаданных ресурса с соответствующей информацией в кэше — копия ресурса помечается как устаревшая. 

Какой сайт прислал ожидаемый ответ?

Все


1.2.3.   Запросы GET и POST. Отправьте по запросу на yandex.ru, google.com и apple.com. Что они вернули? 

GET
yandex.ru
200 Ok
google.com
200 OK
apple.com
200 OK

POST
yandex.ru
403 Forbidden
google.com
405 Method Not Allowed
apple.com
200 OK


Что содержится в теле ответа?

GET
Используется для запроса содержимого указанного ресурса. С помощью метода GET можно также начать какой-либо процесс. В этом случае в тело ответного сообщения следует включить информацию о ходе выполнения процесса. Согласно стандарту HTTP, запросы типа GET считаются идемпотентными.

POST
В отличие от метода GET, метод POST не считается идемпотентным[4], то есть многократное повторение одних и тех же запросов POST может возвращать разные результаты (например, после каждой отправки комментария будет появляться очередная копия этого комментария). 
При результате выполнения 200 (Ok) в тело ответа следует включить сообщение об итоге выполнения запроса. Если был создан ресурс, то серверу следует вернуть ответ 201 (Created) с указанием URI нового ресурса в заголовке Location. 
Сообщение ответа сервера на выполнение метода POST не кэшируется. 


## 1.3.          Работа с api сайта. Многие крупные сервисы предоставляют открытое api. Как правило, оно реализовано на подходе REST, но это необязательно. Такое api используется сторонними сервисами и приложениями, которые хотят воспользоваться услугами предоставляющего такое api сервиса. Рассмотрим такое api на примере сайта vk.com (при желании можно выбрать другой подходящий сервис). ##

1.3.1.   Зайдите на https://vk.com/dev/api_requests и посмотрите структуру запросов к данному api.

# 2.       Реализуйте небольшое серверное приложение, с использованием любого фреймворка. Лучшего всего для этой цели подойдет NodeJS: решение получится очень компактным и простым. #
    
    var http = require("http");
     
    http.createServer(function(request, response){
     
    console.log("Url: " + request.url);
    console.log("Тип запроса: " + request.method);
    console.log("User-Agent: " + request.headers["user-agent"]);
    console.log("Все заголовки");
    console.log(request.headers);
     
    response.end();
    }).listen(****);

Обращение к серверу через браузер:
Url: /index.html
Тип запроса: GET
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36 Edge/17.17134
Все заголовки
{ 'user-agent':
   'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36 Edge/17.17134',
  'accept-language': 'ru,en-US;q=0.7,en;q=0.3',
  accept:
   'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
  'upgrade-insecure-requests': '1',
  'accept-encoding': 'gzip, deflate',
  host: 'localhost:****',
  connection: 'Keep-Alive' }

# Сервер должен содержать предоставлять API с поддержкой (GET, POST, DELETE, PUT, OPTION). Данные отправлять в формате json. Конкретное содержание запросов - на ваше усмотрение. Подключите фантазию. (Можно сделать простейший CRUD-сервис с хранением данных в RAM). #

    var express = require('express');
    var app = express();
    
    app.use(express.static('static'));
    
    bodyParser = require("body-parser");
    app.use(bodyParser.urlencoded({ extended: true }));
    
    var options = {
    root: './',
    dotfiles: 'deny',
    headers: {
    'x-timestamp': Date.now(),
    'x-sent': true
    }
    };
    
    app.get('/', function (req, res) {
    var fileName = "static/get.json"
    res.sendFile(fileName, options, function (err) {
    if (err) {
    console.log(err);
    res.status(err.status).end();
    }
    else {
    console.log('Sent:', fileName);
    }
    });
    })
    
    
    app.post('/', function (req, res) {
    console.log('body:', req.body);
    var fileName = ""
    
    if (req.body.id==='1') {
    fileName = "static/p_1.json"
    }
    if (req.body.id === '2') {
    fileName = "static/p_2.json"
    }
    if (req.body.id === '3') {
    fileName = "static/p_3.json"
    }
    
    res.sendFile(fileName, options, function (err) {
    if (err) {
    console.log(err);
    res.status(err.status).end();
    }
    else {
    console.log('Sent:', fileName);
    }
    });
    })
    
    
    app.put('/', function (req, res) {
    res.json(req.body);
    })
    
    
    app.delete('/', function (req, res) {
    var fileName = "static/del.json" 
    res.sendFile(fileName, options, function (err) {
    if (err) {
    console.log(err);
    res.status(err.status).end();
    }
    else {
    console.log('Sent:', fileName);
    }
    });
    })
    
    
    app.options('/', function (req, res) {
    var filename = "static/opt.json"
    res.sendFile(filename, options, function (err) {
    if (err) {
    console.log(err);
    res.status(err.status).end();
    }
    else {
    console.log('Sent:', filename);
    }
    });
    })
    
    
    var server = app.listen(8080, function () {
    var host = server.address().address
    var port = server.address().port
    console.log('Example app listening at http://%s:%s', host, port)
    });
    
    
    
