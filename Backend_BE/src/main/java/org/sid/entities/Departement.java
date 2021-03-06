package org.sid.entities;
// Generated 5 mars 2019 12:53:42 by Hibernate Tools 3.6.0.Final

import java.util.HashSet;
import java.util.Set;
import java.util.UUID;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

/**
 * Departement generated by hbm2java
 */

@Entity
@Table(name = "departement")
public class Departement implements java.io.Serializable {

	private String id = UUID.randomUUID().toString();
	private String nomdepartement;

	//relation
	private Region region;

	private Set<Gie> gies = new HashSet(0);

	public Departement() {
	}


	@Id
	@Column(name = "id", unique = true, nullable = false)
	public String getId() {
		return this.id;
	}

	public void setId(String id) {
		this.id = id;
	}

	@ManyToOne(fetch = FetchType.EAGER)
	@JsonIgnoreProperties("departements")
	public Region getRegion() {
		return this.region;
	}

	public void setRegion(Region region) {
		this.region = region;
	}

	@Column(name = "nomdepartement", length = 254)
	public String getNomdepartement() {
		return this.nomdepartement;
	}

	public void setNomdepartement(String nomdepartement) {
		this.nomdepartement = nomdepartement;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "departement")
	@JsonIgnoreProperties("departement")
	public Set<Gie> getGies() {
		return this.gies;
	}

	public void setGies(Set<Gie> gies) {
		this.gies = gies;
	}

}
