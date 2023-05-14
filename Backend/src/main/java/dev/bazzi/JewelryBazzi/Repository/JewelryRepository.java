package dev.bazzi.JewelryBazzi.Repository;

import dev.bazzi.JewelryBazzi.Model.Jewelry;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface JewelryRepository extends JpaRepository<Jewelry, Integer> {
    void deleteJewelryById(int id);

    public Optional<Jewelry> findJewelryById(int id);
}
