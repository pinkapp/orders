package me.hunter.redis.reciever;
public interface RedisQueueListener<T> {  
  
    public void onMessage(T value);  
}  