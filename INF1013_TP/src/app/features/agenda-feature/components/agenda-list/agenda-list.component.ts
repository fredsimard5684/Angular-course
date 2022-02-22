import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AccountService } from 'src/app/core/services/account.service';
import { UserType } from 'src/app/shared/enums/user-type';
import { User } from 'src/app/shared/models/user';

const ELEMENT_DATA: object[] = [
  {
    prenom: 'Billy',
    nom: 'Bob',
    lieu: '666 rue hell yeah',
    date_demande: '06-06-06',
    date_rdv: '06-06-06',
    heure_debut: '14:50',
    heure_fin: '15:50',
    statut: 'Accepté',
  },
  {
    prenom: 'Tibo',
    nom: 'InShape',
    lieu: '99 rue des gros biceps',
    date_demande: '06-06-06',
    date_rdv: '06-06-06',
    heure_debut: '14:50',
    heure_fin: '15:50',
    statut: 'Accepté',
  },
  {
    prenom: 'Juju',
    nom: 'FitCat',
    lieu: '77 rue des quads',
    date_demande: '06-06-06',
    date_rdv: '06-06-06',
    heure_debut: '14:50',
    heure_fin: '15:50',
    statut: 'Refusé',
  },
  {
    prenom: 'Billy',
    nom: 'Bob',
    lieu: '666 rue hell yeah',
    date_demande: '06-06-06',
    date_rdv: '06-06-06',
    heure_debut: '14:50',
    heure_fin: '15:50',
    statut: 'Accepté',
  },
  {
    prenom: 'Tibo',
    nom: 'InShape',
    lieu: '99 rue des gros biceps',
    date_demande: '06-06-06',
    date_rdv: '06-06-06',
    heure_debut: '14:50',
    heure_fin: '15:50',
    statut: 'Accepté',
  },
  {
    prenom: 'Juju',
    nom: 'FitCat',
    lieu: '77 rue des quads',
    date_demande: '06-06-06',
    date_rdv: '06-06-06',
    heure_debut: '14:50',
    heure_fin: '15:50',
    statut: 'Refusé',
  },
  {
    prenom: 'Billy',
    nom: 'Bob',
    lieu: '666 rue hell yeah',
    date_demande: '06-06-06',
    date_rdv: '06-06-06',
    heure_debut: '14:50',
    heure_fin: '15:50',
    statut: 'Accepté',
  },
  {
    prenom: 'Tibo',
    nom: 'InShape',
    lieu: '99 rue des gros biceps',
    date_demande: '06-06-06',
    date_rdv: '06-06-06',
    heure_debut: '14:50',
    heure_fin: '15:50',
    statut: 'Accepté',
  },
  {
    prenom: 'Juju',
    nom: 'FitCat',
    lieu: '77 rue des quads',
    date_demande: '06-06-06',
    date_rdv: '06-06-06',
    heure_debut: '14:50',
    heure_fin: '15:50',
    statut: 'Refusé',
  },
  {
    prenom: 'Billy',
    nom: 'Bob',
    lieu: '666 rue hell yeah',
    date_demande: '06-06-06',
    date_rdv: '06-06-06',
    heure_debut: '14:50',
    heure_fin: '15:50',
    statut: 'Accepté',
  },
  {
    prenom: 'Tibo',
    nom: 'InShape',
    lieu: '99 rue des gros biceps',
    date_demande: '06-06-06',
    date_rdv: '06-06-06',
    heure_debut: '14:50',
    heure_fin: '15:50',
    statut: 'Accepté',
  },
  {
    prenom: 'Juju',
    nom: 'FitCat',
    lieu: '77 rue des quads',
    date_demande: '06-06-06',
    date_rdv: '06-06-06',
    heure_debut: '14:50',
    heure_fin: '15:50',
    statut: 'Refusé',
  },
  {
    prenom: 'Billy',
    nom: 'Bob',
    lieu: '666 rue hell yeah',
    date_demande: '06-06-06',
    date_rdv: '06-06-06',
    heure_debut: '14:50',
    heure_fin: '15:50',
    statut: 'Accepté',
  },
  {
    prenom: 'Tibo',
    nom: 'InShape',
    lieu: '99 rue des gros biceps',
    date_demande: '06-06-06',
    date_rdv: '06-06-06',
    heure_debut: '14:50',
    heure_fin: '15:50',
    statut: 'Accepté',
  },
  {
    prenom: 'Juju',
    nom: 'FitCat',
    lieu: '77 rue des quads',
    date_demande: '06-06-06',
    date_rdv: '06-06-06',
    heure_debut: '14:50',
    heure_fin: '15:50',
    statut: 'Refusé',
  },
  {
    prenom: 'Billy',
    nom: 'Bob',
    lieu: '666 rue hell yeah',
    date_demande: '06-06-06',
    date_rdv: '06-06-06',
    heure_debut: '14:50',
    heure_fin: '15:50',
    statut: 'Accepté',
  },
  {
    prenom: 'Tibo',
    nom: 'InShape',
    lieu: '99 rue des gros biceps',
    date_demande: '06-06-06',
    date_rdv: '06-06-06',
    heure_debut: '14:50',
    heure_fin: '15:50',
    statut: 'Accepté',
  },
  {
    prenom: 'Juju',
    nom: 'FitCat',
    lieu: '77 rue des quads',
    date_demande: '06-06-06',
    date_rdv: '06-06-06',
    heure_debut: '14:50',
    heure_fin: '15:50',
    statut: 'Refusé',
  },
];

@Component({
  selector: 'app-agenda-list',
  templateUrl: './agenda-list.component.html',
  styleUrls: ['./agenda-list.component.scss'],
})
export class AgendaListComponent implements OnInit, AfterViewInit {
  dataSource = new MatTableDataSource<object>(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = [
    'prenom',
    'nom',
    'lieu',
    'date_demande',
    'date_rdv',
    'heure_debut',
    'heure_fin',
    'statut',
  ];

  user: User;

  constructor(private accountService: AccountService) {
    this.user = accountService.user;
  }

  ngOnInit(): void {}
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  isHairDresser(): boolean {
    return this.user.userType === UserType.HairDresser;
  }

  acceptRequest() {}
  refuseRequest() {}
}
