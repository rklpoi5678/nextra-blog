인사이트: supabase랑 postgresSQL은 한패다. 이놈들이 관리하는것은 조심해야된다.
❌ “코드 문제인가?”  
❌ “데이터가 안 들어왔나?”  
❌ “쿼리 실패인가?”

✅ **“아, PostgreSQL의 RLS 정책이 Supabase 내부에서 기본 차단으로 작동하고 있었구나.”** 

| 상황          | 겉보기 현상                  | 진짜 원인                         |
| ----------- | ----------------------- | ----------------------------- |
| select가 실패함 | `data === null`         | 🔒 RLS 정책 없음                  |
| insert가 안 됨 | 아무 반응 없음                | 🔒 RLS insert 권한 없음           |
| update가 안 됨 | `.update()` 에러          | 🔒 auth.uid() != id           |
| 자동 연동이 안 됨  | 트리거 안 먹음                | 🧨 auth schema는 GUI read-only |
| upsert 실패   | `onConflict`인데 아무 변화 없음 | PK나 index 없거나 틀림              |

기억(Memory): 과거 대화/상태를 저장하고 재사용
학습(learning): 새로운 입력을 받아들여 자기 규칙