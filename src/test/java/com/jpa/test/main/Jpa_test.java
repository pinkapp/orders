package com.jpa.test.main;  
  
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;

import com.sky.model.Attachment;
import com.sky.model.Tdoc;
  
public class Jpa_test {  
  
    /** 
     * @param args 
     */  
    public static void main(String[] args) {  
        try{  
            EntityManagerFactory entityManagerFactory = Persistence.createEntityManagerFactory("MyPersistenceUnit");  
            System.out.println(entityManagerFactory.isOpen());  
            EntityManager entityManager = entityManagerFactory.createEntityManager();  
            EntityTransaction entityTransection = entityManager.getTransaction();  
              
            entityTransection.begin();  
            Attachment attachment = new Attachment();
            entityManager.persist(attachment);
            Tdoc doc = new Tdoc("dd", "dd", "dd", "no");
            doc.addAttachment(attachment); 
              
            entityManager.persist(doc);  
            entityTransection.commit();  
            
            Tdoc d = entityManager.find(Tdoc.class, doc.getId());
            System.out.println(d.getAttachments());
            entityManager.close();  
            entityManagerFactory.close();  
            System.out.println("success!");  
        } catch(Exception e){  
            System.out.println("fail!");  
            e.printStackTrace();  
        }  
    }  
  
}  