package com.aichacha.config;

import com.aichacha.utils.NeItems;
import com.aichacha.utils.PosItems;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.baidu.aip.nlp.AipNlp;
import org.json.JSONObject;

/**
 * @author Janlay
 * @date 2018/02/14
 */
public class AiConfig {

    public static final String APP_ID = "您的APP_ID";
    public static final String API_KEY = "您的API_KEY";
    public static final String SECRET_KEY = "您的SECRET_KEY";

    public static String NlpClient(String text) {
        // 初始化一个AipNlp
        AipNlp client = new AipNlp(APP_ID, API_KEY, SECRET_KEY);

        // 可选：设置网络连接参数
        client.setConnectionTimeoutInMillis(2000);
        client.setSocketTimeoutInMillis(60000);
        // 调用接口
        JSONObject res = client.lexer(text.trim(), null);//开始解析
        com.alibaba.fastjson.JSONObject result= JSON.parseObject(res.toString());//转换为JSONObject
        JSONArray itemsArray=result.getJSONArray("items");//提取item里内容
        JSONArray outArray=new JSONArray();
        for (int i=0;i<itemsArray.size();i++){//遍历JSONArray 重新组合
            com.alibaba.fastjson.JSONObject item=JSON.parseObject(itemsArray.getString(i));//获取当前JSONArray
            com.alibaba.fastjson.JSONObject Outitem =new com.alibaba.fastjson.JSONObject();
            //填充JSON数据
            Outitem.put("id",i+1);//新JSONArrayid
            String name=item.get("item").toString();//新JSONArray name
            String basic_words=item.get("basic_words").toString().replace("\"","").replace(",","-");//细分字词
            Outitem.put("name",name);//当前字词填充
            Outitem.put("basic_words",basic_words);//当前细分字词填充
            String pos =item.get("pos").toString();//获取词性
            String ne=item.get("ne").toString();//获取专有名词
            if (pos.equals("")){//如果词性为空 则只填充专有名词
                Outitem.put("ne",ne);
                Outitem.put("neChinese",NeItems.getNeName(ne));
                Outitem.put("isNeedUri",true);//专有名词必须要有链接
                Outitem.put("uri","https://baike.baidu.com/item/"+name);//组合知识库链接
            }
            else if(ne.equals("")){//如果专有名词为空 则只填充词性
                Outitem.put("pos",pos);
                Outitem.put("posChinese", PosItems.getPosName(pos));
                if (PosItems.getPosNameFindUrl(pos)==1){//如果词性需要链接
                    Outitem.put("isNeedUri",true);
                    Outitem.put("uri","https://baike.baidu.com/item/"+name);//组合知识库链接
                }else{
                    Outitem.put("isNeedUri",false);
                }
            }
            outArray.add(Outitem);//添加到总JSONArray
        }
        return outArray.toString();//返回JSONArray
    }
}
