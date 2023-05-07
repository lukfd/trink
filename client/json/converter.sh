#!/bin/bash

maschio=""
femmina=""
unisex=""

maschioFunction() {
  maschio=$(echo "$maschio"; echo "\"$1\",")
}
femminaFunction() {
  femmina=$(echo "$femmina"; echo "\"$1\",")
}
unisexFunction() {
  unisex=$(echo "$unisex"; echo "\"$1\",")
}

easy="../../csv/easy.csv"
hot="../../csv/hotcopy.csv"
flirt="../../csv/flirt.csv"

echo "export default {" > ./tmp.js

while read line
do
  if [[ $line == *"\""* ]]
  then
    echo "$line" >> ./todo.csv
  else
    if [ "$(echo "$line" | cut -d',' -f2)" ]
    then
      maschioFunction "$(echo "$line" | cut -d',' -f2)"
    fi
    if [ "$(echo "$line" | cut -d',' -f3)" ]
    then
      unisexFunction "$(echo "$line" | cut -d',' -f3)"
    fi
    if [ "$(echo "$line" | cut -d',' -f4)" ]
    then
      femminaFunction "$(echo "$line" | cut -d',' -f4)"
    fi
  fi
done < $hot

echo "maschio: [$maschio]," >> ./tmp.js 
echo "unisex: [$unisex]," >> ./tmp.js 
echo "femmina: [$femmina]" >> ./tmp.js 

echo "}" >> ./tmp.js 
