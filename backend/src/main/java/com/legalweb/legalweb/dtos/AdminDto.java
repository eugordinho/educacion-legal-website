package com.legalweb.legalweb.dtos;

import com.legalweb.legalweb.models.Admin;
import com.legalweb.legalweb.models.Article;

import java.util.ArrayList;
import java.util.List;

public class AdminDto {
    private Long id;
    private String name;
    private String email;
    private String password;
    private List<Article> articles = new ArrayList<>();

    public AdminDto(Admin admin) {
        this.id = admin.getId();
        this.name = admin.getName();
        this.email = admin.getEmail();
        this.password = admin.getPassword();
        this.articles = admin.getArticles();
    }

}
