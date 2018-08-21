package org.demoiselle.app.dao;

import org.demoiselle.app.entity.Entidades;
import java.util.UUID;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import org.demoiselle.jee.crud.AbstractDAO;

public class EntidadesDAO extends AbstractDAO< Entidades, UUID> {

    @PersistenceContext(unitName = "appPU")
    protected EntityManager em;

    @Override
    protected EntityManager getEntityManager() {
        return em;
    }

}
