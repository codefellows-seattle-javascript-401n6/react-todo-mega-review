PACKAGES=`find . | grep -Rh package.json | grep -v node_mod`
echo $PACKAGES

PORT=9000
for PACKAGE in $PACKAGES
do
  echo $PACKAGE
  DIRNAME=`dirname $PACKAGE`
  cd $DIRNAME
  npx webpack-dev-server --inline --hot --history-api-fallback --open --port $PORT &
  PORT=$(expr $PORT + 1)
  cd -
done
