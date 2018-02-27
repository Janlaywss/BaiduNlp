package com.aichacha.utils;

import com.alibaba.fastjson.JSONObject;

/**
 * @author Janlay
 * @date 2018/02/14
 */
public class PosItems {
    public static String getPosName(String Posid){
		//所有的词性
        JSONObject PosItems=new JSONObject();
        PosItems.put("n","普通名词");
        PosItems.put("nr","人名");
        PosItems.put("nz","其他专名");
        PosItems.put("a","形容词");
        PosItems.put("m","数量词");
        PosItems.put("c","连词");
        PosItems.put("f","方位名词");
        PosItems.put("ns","地名");
        PosItems.put("v","普通动词");
        PosItems.put("ad","副形词");
        PosItems.put("q","量词");
        PosItems.put("u","助词");
        PosItems.put("s","处所名词");
        PosItems.put("nt","机构团体名");
        PosItems.put("vd","动副词");
        PosItems.put("an","名形词");
        PosItems.put("r","代词");
        PosItems.put("xc","其他虚词");
        PosItems.put("t","时间名词");
        PosItems.put("nw","作品名");
        PosItems.put("vn","名动词");
        PosItems.put("d","副词");
        PosItems.put("p","介词");
        PosItems.put("w","标点符号");
        return PosItems.get(Posid).toString();
    }
    public static int getPosNameFindUrl(String Posid){
		//需要链接的词性
        JSONObject PosItems=new JSONObject();
        PosItems.put("n","普通名词");
        PosItems.put("nr","人名");
        PosItems.put("nz","其他专名");
        PosItems.put("ns","地名");
        PosItems.put("s","处所名词");
        PosItems.put("nt","机构团体名");
        PosItems.put("an","名形词");
        PosItems.put("vn","名动词");
        PosItems.put("t","时间名词");
        PosItems.put("nw","作品名");
        if (PosItems.get(Posid)==null){
            return 0;
        }else{
            return 1;
        }
    }
}
