from src.commands.base_command import BaseCommand
from src.db.session import SessionLocal
from src.errors.errors import InvalidFabricanteData, FabricanteNotFound
from src.models.fabricante import Fabricante
from src.utils.helpers import is_valid_uuid


class Delete(BaseCommand):
    def __init__(self, fabricante_id):
        self.id = fabricante_id

    def execute(self):
        if not is_valid_uuid(str(self.id)):
            raise InvalidFabricanteData()

        db = SessionLocal()
        fabricante = db.query(Fabricante).filter(Fabricante.id == self.id).first()
        
        if not fabricante:
            raise FabricanteNotFound()

        db.delete(fabricante)
        db.commit()
