## 핵심
이미 Remote Repository에 올라간 커밋을 **취소**해야 한다면?

git revert(되돌리다라는 뜻) (commit hash)
> 해당 커밋에 내용을 되돌리고 다시 커밋하는 커맨드이다.

git push
> 이제 원격의 브랜치에서도 revert한 변경사항이 저장된다.

로컬 레포지토리에서 작업한것을 git reset을 이용해서 돌아가면되지만 원격 리모트에까지 올렸다면 그렇게 하면안된다.
![[Pasted image 20250814180439.png]]
>위 그림처럼 원격과 로컬의 상황이 달라서 git pull하라는 명령어가 튀어나온다.
![[Pasted image 20250814180518.png]]
>리버트는 앞에 커밋을 하나만들고 브랜치랑 헤드를 가르키게한다.![[Pasted image 20250814180558.png]]
>그래서 로컬이 한단계 올라가니 깃 푸시가된다.
4번째커밋이나 하나생긴 커밋이나 변경사항은 같은데 결과가 다르다.

## 여러 커밋 취소하기
git revert facd...eea5 어디서 어디까지 리버트할건지 정해준다.![[Pasted image 20250814180836.png]]
> facd는 포함되지않고 eea5까지가 포함된다.
![[Pasted image 20250814180939.png]]
> 실제로역순으로 리버트된 커밋 완료 되었다
> 이제 리모트에 푸시한다

git push
> 이제 프리미엄 브랜치도 같게해준다.

git checkout premium

git history(alias된 커맨드)
>프리미엄 브랜치의 로그를 본다

git revert facd...eea5
> 커밋 메시지를 입력하고 
> 원격 프리미엄 브랜치로 푸시한다.

git push