import { ButtonDTO } from './button-dto';
import { SocialDTO } from './social-dto';

export class IntroDTO {
    public imageBackGroundUrl: string;
    public imageProfileUrl: string;
    public fullName:string;
    public shortDescription: string;
    public buttons:ButtonDTO[];
    public socials:SocialDTO[];
}



