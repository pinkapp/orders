package me.hunter.test;
import redis.clients.jedis.Jedis;  
import redis.clients.jedis.JedisPubSub;  
  
public class RedisClient2 {  
    public static void main(String[] args){  
        Jedis jRedis = new Jedis("192.168.11.133");  
        JedisPubSub jedisPubSub=new JedisPubSub() {  
            @Override  
            public void onMessage(String channel, String message) {  
                super.onMessage(channel, message);  
                System.out.println(message);  
            }  
        };  
        jRedis.subscribe(jedisPubSub,"hello");
    }  
}