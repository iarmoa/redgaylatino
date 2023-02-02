import React from 'react';
import HomePageTitle from '../../components/Header/HomePageTitle';
import CurrentCampaign from '../../components/Camapign/CurrentCampaign';
import MetaData from '../../components/Elements/MetaData';

export async function getServerSideProps(){
    const listOfCampaigns = await fetch(`${process.env.NEXT_PUBLIC_API_END_POINT}/campaigns`);
    const campaigns = await listOfCampaigns.json();

    if(campaigns.campaigns.length == 0){
        return {
            notFound: true
        }
    }

    const campaignId = campaigns.campaigns[0].urlId[0];
    const campaignData = await fetch(`${process.env.NEXT_PUBLIC_API_END_POINT}/campaigns/${campaignId}`);
    const campaign = await campaignData.json();

    return {
        props: {
            campaignsList: campaigns,
            campaign: campaign.campaign,
            news: campaign.news
        }
    }
}


export default function Campaign({ campaignsList, campaign, news }){
    const lang = "es";
    return (
        <>
            <MetaData
                title = { "GayLatino - " + campaign.title[lang] }
                description= { campaign.description[lang] }
                url="/campaigns"
            />
            <HomePageTitle
                title={campaign.title[lang]}
                tagline="¿En qué estamos trabajando?"
            />
            <CurrentCampaign campaign={campaign} posts={news} lang={lang} />
        </>
    );

}