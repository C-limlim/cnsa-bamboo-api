docker login --username AWS -p $(aws ecr get-login-password --region ap-northeast-2 --profile kiwi) 138497848618.dkr.ecr.ap-northeast-2.amazonaws.com
docker build -t 138497848618.dkr.ecr.ap-northeast-2.amazonaws.com/cnsa-bamboo-api:$1 .
docker push 138497848618.dkr.ecr.ap-northeast-2.amazonaws.com/cnsa-bamboo-api:$1
