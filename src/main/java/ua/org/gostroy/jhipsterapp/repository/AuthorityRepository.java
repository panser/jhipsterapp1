package ua.org.gostroy.jhipsterapp.repository;

import ua.org.gostroy.jhipsterapp.domain.Authority;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Spring Data JPA repository for the Authority entity.
 */
public interface AuthorityRepository extends JpaRepository<Authority, String> {
}
