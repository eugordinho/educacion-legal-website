package com.legalweb.legalweb.dtos;

import com.legalweb.legalweb.models.Client;
import com.legalweb.legalweb.models.Subscribed;

public class ClientDto {
    private Long id;
    private String name;
    private String email;
    private Subscribed suscribed;

    public ClientDto(Client client) {
        this.id = client.getId();
        this.name = client.getName();
        this.email = client.getEmail();
        this.suscribed = client.getSuscribed();
    }

    public Long getId() {
        return id;
    }
    public String getName() {
        return name;
    }
    public String getEmail() {
        return email;
    }
    public Subscribed getSuscribed() {
        return suscribed;
    }
}
