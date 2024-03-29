import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Match } from './matches.model';

@Injectable()
export class MatchesService {
  constructor(
    @InjectModel(Match)
    private MatchesModel: typeof Match
  ) { }

  async loadAllMatches(id?: number): Promise<Match[] | Match> {
    if (id) {
      const match = await this.MatchesModel.findByPk(id);
      return match;
    }

    const matches = await this.MatchesModel.findAll();
    return matches;
  }

  async createMatch(matchData: Partial<Match>): Promise<Match> {
    const newMatch = await this.MatchesModel.create(matchData);
    return newMatch;
  }

  async updateMatch(matchId: number, updatedMatchData: Partial<Match>): Promise<Match | null> {
    const matchToUpdate = await this.MatchesModel.findByPk(matchId);
    if (!matchToUpdate) {
      return null;
    }
    Object.assign(matchToUpdate, updatedMatchData);
    await matchToUpdate.save();
    return matchToUpdate;
  }

  async deleteMatch(matchId: number): Promise<boolean> {
    const matchToDelete = await this.MatchesModel.findByPk(matchId);
    if (!matchToDelete) {
      return false;
    }
    await matchToDelete.destroy();

    return true;
  }
}