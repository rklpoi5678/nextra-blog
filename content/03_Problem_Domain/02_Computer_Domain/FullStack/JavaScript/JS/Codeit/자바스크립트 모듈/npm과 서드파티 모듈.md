## require vs import
로컬 모듈(자신이 작성한 모듈)과 서드파티 모듈을 import하는 방식이 통일되어야 하기 때문에 requre()을 import로 바꿔서 사용하는것을 추천한다.

## package.json
모듈을 패키지로 부르니까 package로 불리었다.
```json
{
	"dependencies": {
		"date-fns": "^2.30.0"
	},
	"type": "module", // commonjs문법을 이 json파일안에서 ES 모듈로사용할수있게한다.
	"scripts": {
		"start": "node main.js",
		"test" : "node test.js"
	} // npm run start, npm run test처럼 명령어로 해당 문자열에 있는내용을 실행시킬수있다. (npm run <*command*>)
}
```
> dependencies는 서드파티 패키지들의 목록을보여준다.
package.json 파일을 보고 main 필드에 명시된 파일에서 import를 하는것이다. 이때 main필드의 디폴트는 index.js이기 때문에 사실 이 필드가없어도 잘 작동한다.(서드 파티툴 date-fns)

## Semantic Version
```json
{
	"dependencies": {
		"date-fns": "^2.29.3" // Semantic Version(시멘틱 버전)
	},
}
```
의미론적 버전이다. X.Y.Z처럼 쪼개 봤을 때, X를 메이저 버전,Y를 마이너 버전, Z를 패치버전이라고 한다. 시멘틱 버전에서 중요한것은 패키지의 버전을 업데이트할 때 일정한 규칙이있다는것이다.

/*  package.json 파일이 있는 디렉토리를 '패키지'라고 부른다.

### **패치 버전(Z)**
버그 수정이나 코드의 효율성을 높이는 경우 등 기존 코드에 영향을 주지않는 변화가 있을 때 업데이트한다.(2.29.3 -> 2.29.4)
### **마이너 버전(Y)**
어떤 새로운 기능이 추가됐을 때 업데이트 한다. 새로운 버전을 사용하는 사람들은 이 함수를 사용할 수 있고 기존에 작성한 코드도 그대로 작동할 것이다.(2.29.3 -> 2.30.0)
**메이저 버전(X)**
이전 버전과 호환이 안될 때 업데이트한다. 기존에 있던 기능을 지우거나 동작방식이 완전히 바뀌어서 기존에 쓴 코드가 오류가 난다면 메이저 버전을 업데이트해야하는것
원래 사용하던 이전 버전 패키지와 비교해서 어떤 부분들이 바뀐 건지를 체크하고, 코드를 수정해야 할 가능성이 높기 때문입니다.(2.29.3 -> 3.0.0)

## 캐럿 기호(^)
가장 왼쪽의 0이 아닌 버전이 바뀌지 않는 선에서 버전 업데이트 만을 허용한다는 뜻이다. ^2.29.3의 경우 메이저 버전(2)만 바뀌지 않으면 된다는 뜻이다. 패키지 버전에 대한 정보는 npm이 알아서 관리해주기 때문에 직접 작성하는 경우가 드물다.

## package-lock.json
설치된 패키지의 정확한 버전과 내용이 적힌다. 용량이 크기때문에 공유하지않고 package.json을 공유한다.
협업하는 사람들은 협업하는 사람들 끼리 같은 패키지 버전과 환경을 사용하는 것이 좋습니다.
-> 이럴때 package-lock.json 이 필요하다 정확한 버전을 알수있기때문이다.
-> 같은 환경에 작업할때는 공유할때 package.json과 package-lock.json을 같이 공유하는것이 좋다.(npm install) 하면 공유한 사람과 똑같은 버전으로 설치하게 해준다.

## npm command

`npm install(npm i)`
`@version`
특정버전을 설치하고 싶다면 엣을 사용
```bash
npm install pkg_name@version
npm i date-fns@2.29.0
```
`--global (-g)`
패키지 중에서는 import하지 않고 커맨드라인에서 사용하는것이 있다. 이런 패키지들을 글로벌옵션으로 설치한다.
```bash
npm install pkg_name --global
npm i nodemon --global
```
nodemon패키지를 설치하면 아래와 같이 node대신 nodemon이라는 커맨드로 프로그램을 실행할수있다.
``` bash
node main.mjs
```
> 커맨드라인에서 사용하는 패키지는 일반 설치를 하면 제대로 작동하지 않을 수도 있다.
> 전역설치라 패키지가 설치한 디렉토리가 아니어도 어디서든지 사용할수있다.

`--save-dev -D`
```bash
npm install pkg_name --save-dev
npm install jest --save-dev
```
> --save-dev 옵션을 선택하면 package.json의 dependencies필드에 기록되지 않고 devDependencise필드에 기록된다. 
> 나중에 배포할때 (npm install --production)커맨드를 사용하거나 환경변수를 통해 node.js 환경을 production으로 설정한다면 devDependencise에 있는 패키지들은 설치되지않는다.

`npm list (npm ls)`
```bash
npm list
# 전역 설치된 패키지 목록
npm list -g
```

`npm update (npm up)`
패키지를 가장 최신 버전으로 업데이트한다. 패키지 이름을 생략하면 현재 디렉토리에 있는 모든 패키지를 업데이트한다.
```bash
npm update

npm update pkg_name

# 전역 패키지 모든 패키지 업데이트
npm update -g

npm update -g pkg_name
```

`npm uninstall(npm un)`
패키지를 제거한다.
```bash
npm uninstall pkg_name
npm un -g pkg_name
```



