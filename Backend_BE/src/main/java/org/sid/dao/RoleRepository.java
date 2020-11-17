package org.sid.dao;

import org.sid.entities.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, String> {
	
	public Role findByLibelle(String libelle) ;



}
