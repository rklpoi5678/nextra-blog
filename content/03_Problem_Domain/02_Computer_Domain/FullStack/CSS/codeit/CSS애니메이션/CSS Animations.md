핵심
`animation, @keyframes`


## @keyframs 란?
키프레임이란 CSS 스타일이 변화되는 중간 지점을 의미한다. 어떤 시점에 요소가 스타일을 가져야 하는지 단계별로 정의할수있는것

문법
1. 처음 스타일과 최종 스타일을 정하는것
```CSS
@keyframes animation-name {
	from {
		/* 처음 스타일 */
	}
	to {
		/* 최종 스타일 */
	}
}
```
2. 좀 더 세분화해서 단계별로 정의하는 방법
```CSS
@keyframes animation-name {
	0% {
		/* 처음 스타일 */
	}
	50% {
		/* 중간 스타일 */
	}
	100% {
		/* 최종 스타일 */
	}
}
```
사용법
animation-name, animation-duration 사용해도되고
animation으로 한번에 줘도된다.
```CSS
.box {
	animation-name: animation-name;
	animation-duration: 3s;
}
```
```CSS
.box {
	animation: animation-name 3s;
}
```

animation-delay
애니메이션이 시작되기 전 기다리는 시간을 설정한다. 즉, 애니메이션을 일정 시간 동안 지연시키는것이다.
```CSS
.box{
	animation-delay: 1s; /* 1초 있다가 실행이된다. */
}
```

animation-iteration-count
```CSS
.box1 {
	animation-iteration-count 3: /* 3회 반복후 애니메이션 정지 */
}
.box2 {
	animation-iteration-count: infinite; /* 무한 반복을 한다. */
}
```

animation-timing-function
transition에서 배웠던 베지에 곡선을 지정한다. ease,linear,ease-in-out등의 값들을 사용
```CSS
@keyframes change-length {
	form {
		transform: scaleX(1);
	}
	to {
		transform: scaleX(3);	
	}
}

.box {
...
	animation-name: change-length;
	animation-duration: 3s;
	animation-iteration-count: infinite;
	transform-origin: left;
}


.box0 {
	animation-timing-function: ease;
}
.box1 {
	animation-timing-function: linear;
}
.box2 {
	animation-timing-function: ease-in;
}
```

animation-direction
애니메이션의 재생방향을 정한다. 기본값normal(순방향),reverse(역방향)으로 애니매이션 재생
alternate는 순방향시작 순방향과 역방향을 번갈아 재생, 그리고 alternate-reverse는 역방향으로 시작해 역방향과 순방향을 번갈아 재생

한방향은 끝나면 애니메이션이 끈기면서 다시시작하지만
양방향은 반복해서 왔다갔다하는 애니메이션을 끊김없이 구현한다.

animation-fill-mode
시작하기전이나 끝난후 어떤 스타일이 적용될지를 설정
'시작하기전'은 딜레이 시간 동안을 의미
- none: 기본값, 별도의 스타일이없음, 끝난후 원래대로
- forwards: 끝난후 마지막에 적용된 애니메이션 스타일유지
- backwards: 시작하기전, 애니메이션 처음 시작 스타일로 유지
- both: forwards와 backwards가 같이 적용됨
```CSS
/* 바를 만드는데 호버후 원래크기가 보이고 줄어들기 시작해서 어딘가 이상하게보인다. */
.chart-cover:hover .bar {
  display: block;
  animation: bar-handler 1s infinite /* backwards */ /* ease-out */;
}

.chart-cover:hover .bar2 {
  animation-delay: 0.1s
}

.chart-cover:hover .bar3 {
  animation-delay: 0.2s
}

.chart-cover:hover .bar4 {
  animation-delay: 0.3s
}

@keyframes bar-handler {
	0% {
		transform: scaleY(0.1);
	}
	50% {
		transform: scaleY(1);
	}
	100% {
		transform: scaleY(0.1);
	}
}
```
>animation-fill-mode속성을 이용안했기에 모든 바들이 키프레임에 scaleY(0.1)로 있다가 시작하지 않는다. 기본값이 적용되어 원래 바크기만큼 보이다 scaleY(0.1)이 실행된것 그럴땐 주석부분에 있는 backwards속성으로 애니메이션이 "시작되기전" 처음 스타일인 scaleY(0.1)로 유지 , 마지막으로 타이밍 함수를 추가해 더 다이나믹하게 표현가능하다.
## animation 축약형
```css
animation: change-color 3s infinite;
```
다만 아래처럼 좀 많으면 헷갈릴수있따.
```css
animations: change-color 3s infinite 1s linear reverse forwards;
```
이럴때는 길어지더라도 따로 풀어서 쓰는것이 더좋을수있다. 가독성측면에서
순서는 상관없지만 시간의 경우 앞에 나오는것이 animation-duration 뒤에 나오는 것이 animation-delay로 인식된다는 점이다.

## 주의사항
- 성능을 해치지 않는선에서 애니메이션 사용, 최적화
- 목적을 명확히, 관심인지, 피드백인지, 정보인지, 그 애니메이션의 목젃생각해보기
- 과하고복잡한것을 피하기 -> 불편함을 줄수있음 (자연스럽게한다.)
- 웹사이트 전반적으로 일관성 있게 애니메이션을 사용한다.