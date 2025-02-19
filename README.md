## 마크다운 뷰어 단축키
> ctrl + shift + v

## cursor 사용법
> @Codebase : 
> 현재 프로젝트 진행하고 있는 파일을 분석하여 코드 작성 힌트를 제공

## git 사용법
```bash
git init
```
> 현재 디렉토리를 Git 저장소로 초기화합니다. 이 명령어를 실행하면 .git이라는 숨김 폴더가 생성되며, 이 폴더는 Git이 버전 관리를 위해 필요한 모든 정보를 저장합니다.

```bash
git add .
```
> 현재 디렉토리 및 하위 디렉토리의 모든 변경 사항을 스테이징 영역(staging area)에 추가합니다. 스테이징 영역은 커밋(commit)을 위해 준비된 파일들을 임시로 저장하는 공간입니다.

```bash
git commit -m '수정 내용'
```
> 스테이징 영역에 추가된 변경 사항을 커밋(commit)합니다. 커밋은 현재 작업 상태를 저장하는 "스냅샷"으로, 프로젝트의 버전을 기록합니다. -m 옵션은 커밋 메시지를 추가하는 데 사용됩니다.

```bash
git branch -M main
```
> 현재 브랜치의 이름을 main으로 변경합니다. Git의 기본 브랜치 이름은 전통적으로 master였지만, 최근에는 main으로 변경하는 것이 일반적입니다.

```bash
git remote add origin http://github.com/sjkjh2/sangsang.git
```
> 원격 저장소(remote repository)를 로컬 저장소에 추가합니다. origin은 원격 저장소의 별칭(alias)이며, 일반적으로 기본 원격 저장소를 가리킬 때 사용됩니다.

```bash
git push origin main
```
> 로컬 저장소의 main 브랜치를 원격 저장소(origin)로 업로드(push)합니다. 이 명령어를 실행하면 로컬에서 작업한 내용이 원격 저장소에 반영됩니다.

## npm sass 설치 밋 설정
```bash
npm i -d sass
```

>package.json 설정
```json
"scripts": {
    "dev": "sass --watch scss:css",
    "build": "sass scss:build --style=compressed --no-source-map"
},
```

