# DevOps Automation Project

## 🚀 Project Overview

This DevOps project automates the complete CI/CD pipeline using **AWS CodePipeline**, **Terraform**, **GitHub Actions**, and **Kubernetes Sealed Secrets**. It integrates infrastructure provisioning, secure application deployment, and automated DevSecOps practices to enable faster, safer, and more reliable software delivery.

---

## 🧰 Tech Stack

- **Terraform** – Infrastructure as Code (IaC) for provisioning AWS services
- **AWS CodePipeline** – CI/CD orchestration
- **GitHub Actions** – DevSecOps pipeline (including linting, security scanning, testing)
- **Kubernetes** – Application deployment
- **Bitnami Sealed Secrets** – Secure Kubernetes secret management
- **Docker** – Containerization

---


---

## ⚙️ Features

- ✅ Provision AWS CodePipeline, S3, CodeBuild, IAM using Terraform
- ✅ GitHub Actions for CI, security scanning (e.g., Trivy, SonarCloud), and tests
- ✅ Automatic build & deployment to Kubernetes
- ✅ Secrets managed via Sealed Secrets (AES/RSA encryption)
- ✅ Containerized app deployment via Docker & Helm (optional)

---

## 🌐 How It Works

1. **Terraform** provisions AWS infrastructure:
   - S3 Bucket (artifact store)
   - CodePipeline, CodeBuild, IAM Roles
2. **GitHub Actions** triggers on code push:
   - Lint, test, scan code for vulnerabilities
   - Build & push Docker image to ECR
   - Update Kubernetes manifests
3. **CodePipeline** picks the updated build and deploys to the cluster
4. **Sealed Secrets** encrypt Kubernetes secrets, safely stored in Git

---

## 🛠️ Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/devops-project.git
cd devops-project
```
### 2. Configure AWS CLI
```bash
aws configure
```
### 3. Initialize Terraform
```bash
cd terraform
terraform init
terraform apply
```
### 4. Create & Apply Sealed Secret
```bash
kubeseal < mysecret.yaml --cert=pub-cert.pem -o yaml > sealed-secret.yaml
kubectl apply -f sealed-secret.yaml
```
### 5. Push Code to Trigger Pipeline
```bash
git add .
git commit -m "Trigger pipeline"
git push
```
## 🔒 Security
Sealed Secrets ensure secrets are never exposed in plaintext.

GitHub Actions includes:

Trivy for vulnerability scanning

YAML linting

Static code analysis (e.g., ESLint, SonarCloud)


