import React from "react";
import { Map, isImmutable, List, fromJS } from "immutable";

export default function Practice() {
  // const map1 = Map({ a: 1, b: 2 });
  // const map2 = map1;
  // console.log("Map1", isImmutable(map1));
  // console.log("Map2", isImmutable(map2));
  // console.log(map1 === map2);
  // const map3 = map1.merge(map2);
  // console.log(map3);
  // const list1 = List([1, 2, 3]);
  // list1.push(4);
  // console.log("list 1 is immutable", isImmutable(list1));

  const obj = { 1: "one" };
  console.log(obj["1"]);

  const map1 = fromJS(obj);
  const map2 = Map({ 1: "one" });
  console.log(map2.get(1));

  return <div></div>;
}
