RPC Key 519464a122a702fdccb4f7ec247cf266


docker run \
  --volume=/Users/sergeistralenia/Work/golance/golance-core/.dev/dron:/data \
  --env=DRONE_GITHUB_CLIENT_ID=b6fed7b62adf9842a8e4 \
  --env=DRONE_GITHUB_CLIENT_SECRET=8c1dd4cb5097f87acd5f0ef24724e86836617286 \
  --env=DRONE_RPC_SECRET=519464a122a702fdccb4f7ec247cf266 \
  --env=DRONE_SERVER_HOST=d70d20014f67.ngrok.io \
  --env=DRONE_SERVER_PROTO=http \
  --publish=4004:80 \
  --name=droneserver \
  --network=drone \
  --network-alias drone-server \
  --rm \
  drone/drone:1

docker run \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -e DRONE_RPC_PROTO=http \
  -e DRONE_RPC_HOST=host.docker.internal:4004 \
  -e DRONE_RPC_SECRET=519464a122a702fdccb4f7ec247cf266 \
  -e DRONE_RUNNER_CAPACITY=2 \
  -p 4005:3000 \
  --name dronerunner \
  --network=drone \
  --rm \
  drone/drone-runner-docker:1

AKIAVLPPBT5BNB5UAJOW
ipgvRkmAlL+LwAHD8Y2WQs8eidUp7dYmOKMJ3e+S