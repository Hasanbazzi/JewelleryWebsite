package dev.bazzi.JewelryBazzi.Service;

import dev.bazzi.JewelryBazzi.Exception.JewelryNotFoundException;
import dev.bazzi.JewelryBazzi.Model.Jewelry;
import dev.bazzi.JewelryBazzi.Repository.JewelryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@Transactional
@Service
public class JewelryService {
    @Autowired
    private JewelryRepository jewelryRepository;


    public List<Jewelry> AllJewel(){
        return jewelryRepository.findAll();
    }

    public Jewelry createJewelry(@RequestBody Jewelry product) {
        return jewelryRepository.save(product);
    }


    public Jewelry updateJewelry(@PathVariable int id, @RequestBody Jewelry product) {
        Jewelry existingjewelry= jewelryRepository.findJewelryById(id).orElseThrow(() -> new JewelryNotFoundException("Product not found with id " + id));
        existingjewelry.setName(product.getName());
        existingjewelry.setDescription(product.getDescription());
        existingjewelry.setPrice(product.getPrice());
        existingjewelry.setImage(product.getImage());
        return jewelryRepository.save(existingjewelry);
    }

    public void deleteProduct(@PathVariable int id) {
      jewelryRepository.deleteJewelryById(id);


    }
}
