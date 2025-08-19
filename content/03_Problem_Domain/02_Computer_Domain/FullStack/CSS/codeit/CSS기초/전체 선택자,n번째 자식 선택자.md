## 전체선택자(Universal Selector)
`*`라는 선택자는 모든 요소를 선택하는 선택자이다.
```CSS
/* 모든 요소를 선택하기 */
* {
	box-sizing: border-box;	 
}
/* .gallery의 모든 자식 요소 선택하기*/
.gallery > * {
	width: 120px;
	height: 90px;
}
```

## n번째 자식 선택자(n-th child Selector)
`:nth-child()`사용한다. 괄호안에 `even,odd,2n`같은 값들이 들어있다.(다만 여기서는 0부터 시작이 아니라 1부터 시작한다.)
```CSS
/* 3번째 자식 */
.gallery:nth-child(3) { ... }

/* 짝수번째 자식 */
.gallery:nth-child(even) { ... }
.gallery:nth-child(2n) { ... }

/* 홀수번째 자식 */
.gallery:nth-child(odd) { ... }
.gallery:nth-child(2n+1) { ... }
```

처음과 마지막은 `first-child`,`last-child를 사용한다.
```CSS
.gallery:first-child { ... }
.gallery:last-child { ... }
```
