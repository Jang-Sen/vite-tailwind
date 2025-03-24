# 1. Node.js 이미지를 베이스로 사용
FROM node:22-alpine

# 2. 작업 디렉토리를 생성하고 설정
WORKDIR /usr/src/app

# 3. package.json과 package-lock.json을 컨테이너에 복사
COPY package*.json ./

# 4. 의존성 설치
RUN npm install

# 5. Vite 개발 서버를 실행하는 데 필요한 추가 의존성 설치
RUN npm install --save-dev vite

# 6. 소스 코드 복사
COPY . .

# 7. Vite 개발 서버에서 사용할 포트 개방
EXPOSE 5173

# 8. Vite 개발 서버 실행
CMD ["npm", "run", "dev"]