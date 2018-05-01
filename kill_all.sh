SERVERS=`ps -ef | grep webpack-dev-server`
IFS=$'\n'
for SERVER in $SERVERS
do
  PID=$( echo "$SERVER" | cut -d ' ' -f 4 )
  kill $PID
done

