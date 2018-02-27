package com.aichacha.utils;

import com.alibaba.fastjson.JSONObject;

public class NeItems {

    public static String getNeName(String neid){
        JSONObject neitems=new JSONObject();
        neitems.put("PER","人名");//填充专有名词中文
        neitems.put("LOC","地名");
        neitems.put("ORG","机构名");
        neitems.put("TIME","时间");
        return neitems.get(neid).toString();
    }

}
