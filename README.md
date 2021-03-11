# svelte-movie-app
![omdbapi](https://user-images.githubusercontent.com/22463540/110784418-046ae700-82ad-11eb-8929-7bf69a97af7f.PNG)
Svelte, Snowpack, OmdbAPI, Netlify를 이용한 영화 검색사이트 SPA

# netlify
https://jovial-heisenberg-a5eba6.netlify.app

# 강의
https://www.inflearn.com/course/%EC%8A%A4%EB%B2%A8%ED%8A%B8-%EC%8B%A4%EC%8A%B5-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/

# Packages
- snowpack: 프로젝트를 빌드하기 위한 핵심 패키지입니다. 
- @snowpack/plugin-svelte: Snowpack에서 Svelte를 해석할 수 있습니다. svelte-preprocess가 같이 설치됩니다.
- @snowpack/plugin-dotenv: 환경 변수를 사용합니다.(.env 파일)
- @snowpack/plugin-sass: SCSS를 사용합니다. sass가 같이 설치됩니다.
- @snowpack/plugin-optimize: 결과를 압축하고 번들링하는 등 최종 결과를 최적화합니다.
- @snowpack/plugin-babel: 프로젝트의 JavaScript 파일을 변환합니다. 콘솔 제거 패키지를 사용하기 위해 구성합니다. 
- babel-plugin-transform-remove-console: 배포할 제품에서는 불필요한 콘솔 명령을 제거하는 것이 좋습니다.
- svelte: Svelte API를 사용하기 위한 핵심 패키지입니다.
- svelte-spa-router: SPA에 최적화된 Hash 기반 라우팅을 활용할 수 있습니다. 
- autoprefixer: CSS에 자동으로 공급 업체 접두사(Vendor prefix)를 적용합니다.
- postcss: CSS 후처리 패키지로 autoprefixer를 사용하기 위해 설치합니다.
- lodash: 다양한 유틸리티 기능을 제공하는 자바스크립트 라이브러리입니다.
- axios: HTTP 클라이언트 라이브러리로, OMDb API를 통해 영화 정보를 요청하기 위해 사용합니다.
- qs: 쿼리스트링(Query String)을 분석하는 라이브러리입니다.
- netlify-cli: Netlify 명령을 사용해 로컬에서 프로젝트와 서버리스 함수가 통신하기 위해 사용합니다.
