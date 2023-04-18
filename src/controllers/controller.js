import { Persona } from "../models/Persona.js";

export const getPeople = async (req, res) => {
    try {
        const people = await Persona.findAll();
        res.json(people);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const createPerson = async (req, res) => {
    try {
        const { rut, name, phone, email } = req.body;

        const duplicateRut = await Persona.findOne({ where: { rut: rut } });

        if (duplicateRut === null) {
            const newPersona = await Persona.create({
                rut: rut,
                name: name,
                phone: phone,
                email: email,
            });
            res.json(newPersona);
        } else {
            res.status(409).json({ message: "Error.Rut already exists" });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const updatePerson = async (req, res) => {
    try {
        const { id } = req.params;
        const { phone, email } = req.body;

        const person = await Persona.findByPk(id);
        person.phone = phone;
        person.email = email;
        await person.save();
        res.json(person);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const deletePerson = async (req, res) => {
    try {
        const { id } = req.params;
        const idValidate = await Persona.findByPk(id);
        if (idValidate == null) {
            return res.sendStatus(404);
        }
        await Persona.destroy({
            where: {
                id: id,
            },
        });
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
