package tn.esprit.foyer.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.foyer.Entities.Admin;

public interface IAdminRepository extends JpaRepository<Admin,Long> {
}
