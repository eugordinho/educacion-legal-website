package com.legalweb.legalweb.services;

import com.legalweb.legalweb.dtos.AdminDto;
import com.legalweb.legalweb.models.Admin;

import java.util.List;

public interface AdminService {
    List<Admin> getAllAdmins();
    List<AdminDto> getAllAdminsDto();
    Admin getAdminById(Long id);
    Admin saveAdmin(Admin admin);
    Admin getAdminByEmail(String email);
}
