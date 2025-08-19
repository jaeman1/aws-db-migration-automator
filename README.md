# 🚀 AWS 데이터베이스 마이그레이션 자동화 웹 (Easy Migrator)

## 📖 프로젝트 개요
이 프로젝트는 **온프레미스 환경(EC2에 직접 구성한 MySQL 데이터베이스)**에서 **클라우드 환경(Amazon RDS)**으로의 데이터베이스 마이그레이션 과정을 자동화한 솔루션입니다. 

복잡하고 반복적인 AWS Database Migration Service(DMS) 작업을 웹 UI로 추상화하여 **클릭 몇 번으로 안전하고 빠르게 마이그레이션**을 수행할 수 있도록 합니다. 

**핵심 포인트**
- EC2 인스턴스에 직접 MySQL DB를 설치 → 온프레미스 환경 시뮬레이션
- Amazon RDS를 타깃 DB로 구성 → 클라우드 마이그레이션 수행
- AWS DMS + Lambda + Boto3 조합으로 마이그레이션 자동화
- React + Node.js 기반 웹 UI로 사용자는 DB 정보 입력만 하면 마이그레이션 실행 가능

---

## ✨ 주요 기능
- **사용자 친화적 웹 UI**
  - React 기반 인터페이스에서 소스 DB(EC2 기반 MySQL)와 타깃 DB(RDS) 정보 입력
- **자동화된 마이그레이션**
  - 웹 요청 → Node.js 백엔드 → Lambda + Boto3 실행 → DMS 작업 생성 및 실행
- **실시간 모니터링**
  - 마이그레이션 상태 (생성 중 → 진행 중 → 완료/실패) 확인 가능
- **보안 고려**
  - IAM Role 최소 권한 원칙 적용
  - 보안 그룹과 VPC를 통한 안전한 네트워크 통신

---

## 🛠️ 기술 스택 및 아키텍처
**Frontend**
- React, Tailwind CSS

**Backend**
- Node.js, Express

**AWS**
- **EC2 (온프레미스 시뮬레이션 DB)**: MySQL 직접 설치 및 구성
- **Amazon RDS**: 타깃 데이터베이스
- **AWS DMS**: 실제 데이터 마이그레이션 수행
- **AWS Lambda**: Boto3 자동화 스크립트 실행
- **Amazon API Gateway**: 프론트엔드와 Lambda 연결
- **IAM**: 서비스 간 권한 관리

---

## 🏁 실행 방법

### 1. 사전 준비
- AWS 계정 및 IAM 사용자 생성
- **온프레미스 DB 역할**: EC2 인스턴스 생성 후 MySQL 설치
- **마이그레이션 대상 DB**: Amazon RDS 인스턴스 생성
- AWS DMS 엔드포인트 생성 (EC2 MySQL ↔ RDS MySQL)
- IAM 역할 생성 및 DMS/Lambda에 할당

### 2. 프론트엔드 실행
```bash
git clone [https://github.com/jaeman1/aws-db-migration-automator.git](https://github.com/jaeman1/aws-db-migration-automator.git)
cd aws-db-migration-automator/frontend
npm install
npm start
```

### 3. 백엔드 & AWS 자동화 설정
```bash
cd aws-db-migration-automator/backend
npm install
npm start
```
- `automation_scripts/` 폴더의 Python 스크립트를 AWS Lambda 함수로 배포합니다.
- Amazon API Gateway를 설정하여 프론트엔드 요청과 Lambda를 연결합니다.

---

## 🌟 차별점
- ✅ 단순한 AWS 서비스 호출이 아닌 온프레미스 → 클라우드 마이그레이션 실무 시나리오 직접 구현
- ✅ 보안 (IAM, VPC) + 자동화 (Lambda, DMS) + 실시간 모니터링 (웹 UI) 모두 고려
- ✅ 실제 기업의 클라우드 마이그레이션 프로젝트와 유사한 경험 제공
