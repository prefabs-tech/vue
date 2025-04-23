<template>
  <Card class="file-card">
    <div class="file-thumbnail-details-wrapper">
      <div v-if="showThumbnail || $slots.thumbnail" class="file-thumbnail">
        <slot name="thumbnail">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.53 9L13 3.47C12.8595 3.32931 12.6688 3.25018 12.47 3.25H8C7.27065 3.25 6.57118 3.53973 6.05546 4.05546C5.53973 4.57118 5.25 5.27065 5.25 6V18C5.25 18.7293 5.53973 19.4288 6.05546 19.9445C6.57118 20.4603 7.27065 20.75 8 20.75H16C16.7293 20.75 17.4288 20.4603 17.9445 19.9445C18.4603 19.4288 18.75 18.7293 18.75 18V9.5C18.7421 9.3116 18.6636 9.13309 18.53 9ZM13.25 5.81L16.19 8.75H13.25V5.81ZM16 19.25H8C7.66848 19.25 7.35054 19.1183 7.11612 18.8839C6.8817 18.6495 6.75 18.3315 6.75 18V6C6.75 5.66848 6.8817 5.35054 7.11612 5.11612C7.35054 4.8817 7.66848 4.75 8 4.75H11.75V9.5C11.7526 9.69811 11.8324 9.88737 11.9725 10.0275C12.1126 10.1676 12.3019 10.2474 12.5 10.25H17.25V18C17.25 18.3315 17.1183 18.6495 16.8839 18.8839C16.6495 19.1183 16.3315 19.25 16 19.25Z"
              fill="currentColor"
            ></path>
            <path
              d="M13.49 14.85C12.8751 14.4642 12.4124 13.8778 12.18 13.19C12.3953 12.5467 12.4603 11.8625 12.37 11.19C12.3412 11.0206 12.2586 10.865 12.1344 10.7462C12.0102 10.6274 11.8511 10.5518 11.6806 10.5305C11.5101 10.5092 11.3372 10.5433 11.1876 10.6279C11.038 10.7125 10.9197 10.843 10.85 11C10.7362 11.8085 10.822 12.6325 11.1 13.4C10.7202 14.2873 10.2963 15.1551 9.83001 16C9.12001 16.4 8.15001 17 8.00001 17.69C7.88001 18.25 8.93001 19.69 10.72 16.57C11.5159 16.2746 12.3312 16.034 13.16 15.85C13.7727 16.2003 14.4561 16.4088 15.16 16.46C15.3216 16.4642 15.4809 16.4206 15.6178 16.3345C15.7546 16.2484 15.863 16.1238 15.9292 15.9764C15.9955 15.8289 16.0167 15.6651 15.9901 15.5056C15.9636 15.3462 15.8905 15.1981 15.78 15.08C15.36 14.65 14.11 14.77 13.49 14.85ZM8.71001 17.85C8.99025 17.3705 9.36034 16.9495 9.80001 16.61C9.12001 17.69 8.71001 17.88 8.71001 17.86V17.85ZM11.63 11.04C11.89 11.04 11.87 12.19 11.69 12.5C11.5544 12.0285 11.5338 11.5312 11.63 11.05V11.04ZM10.76 15.92C11.0988 15.3019 11.3929 14.6602 11.64 14C11.9049 14.493 12.2734 14.9229 12.72 15.26C12.0491 15.4281 11.3934 15.6522 10.76 15.93V15.92ZM15.46 15.74C15.46 15.74 15.28 15.96 14.13 15.46C15.38 15.38 15.59 15.67 15.46 15.75V15.74Z"
              fill="currentColor"
            ></path>
          </svg>
        </slot>
      </div>

      <div class="details-wrapper">
        <div class="name-description-details-wrapper">
          <div>
            <span v-if="visibilityDetail.originalFileName" class="name">
              {{ file.originalFileName }}
            </span>
            <span v-if="file.size && visibilityDetail.size" class="file-size">
              ({{ file.size }})
            </span>
          </div>

          <div
            v-if="file.description && visibilityDetail.description"
            class="description-wrapper-details"
          >
            <span>{{ file.description }}</span>
            <ButtonElement
              v-if="allowEditDescription"
              v-bind="editDescriptionButtonProps"
              size="small"
              @click="$emit('click:editDescription')"
            >
              <template #iconLeft>
                <svg
                  fill="none"
                  viewBox="0 -0.5 25 25"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.2942 7.95881C13.5533 7.63559 13.5013 7.16358 13.178 6.90453C12.8548 6.64549 12.3828 6.6975 12.1238 7.02072L13.2942 7.95881ZM6.811 14.8488L7.37903 15.3385C7.38489 15.3317 7.39062 15.3248 7.39623 15.3178L6.811 14.8488ZM6.64 15.2668L5.89146 15.2179L5.8908 15.2321L6.64 15.2668ZM6.5 18.2898L5.7508 18.2551C5.74908 18.2923 5.75013 18.3296 5.75396 18.3667L6.5 18.2898ZM7.287 18.9768L7.31152 19.7264C7.36154 19.7247 7.41126 19.7181 7.45996 19.7065L7.287 18.9768ZM10.287 18.2658L10.46 18.9956L10.4716 18.9927L10.287 18.2658ZM10.672 18.0218L11.2506 18.4991L11.2571 18.491L10.672 18.0218ZM17.2971 10.959C17.5562 10.6358 17.5043 10.1638 17.1812 9.90466C16.8581 9.64552 16.386 9.69742 16.1269 10.0206L17.2971 10.959ZM12.1269 7.02052C11.8678 7.34365 11.9196 7.81568 12.2428 8.07484C12.5659 8.33399 13.0379 8.28213 13.2971 7.95901L12.1269 7.02052ZM14.3 5.50976L14.8851 5.97901C14.8949 5.96672 14.9044 5.95412 14.9135 5.94123L14.3 5.50976ZM15.929 5.18976L16.4088 4.61332C16.3849 4.59344 16.3598 4.57507 16.3337 4.5583L15.929 5.18976ZM18.166 7.05176L18.6968 6.52192C18.6805 6.50561 18.6635 6.49007 18.6458 6.47532L18.166 7.05176ZM18.5029 7.87264L19.2529 7.87676V7.87676L18.5029 7.87264ZM18.157 8.68976L17.632 8.15412C17.6108 8.17496 17.5908 8.19704 17.5721 8.22025L18.157 8.68976ZM16.1271 10.0203C15.8678 10.3433 15.9195 10.8153 16.2425 11.0746C16.5655 11.3339 17.0376 11.2823 17.2969 10.9593L16.1271 10.0203ZM13.4537 7.37862C13.3923 6.96898 13.0105 6.68666 12.6009 6.74805C12.1912 6.80943 11.9089 7.19127 11.9703 7.60091L13.4537 7.37862ZM16.813 11.2329C17.2234 11.1772 17.5109 10.7992 17.4552 10.3888C17.3994 9.97834 17.0215 9.69082 16.611 9.74659L16.813 11.2329ZM12.1238 7.02072L6.22577 14.3797L7.39623 15.3178L13.2942 7.95881L12.1238 7.02072ZM6.24297 14.359C6.03561 14.5995 5.91226 14.9011 5.89159 15.218L7.38841 15.3156C7.38786 15.324 7.38457 15.3321 7.37903 15.3385L6.24297 14.359ZM5.8908 15.2321L5.7508 18.2551L7.2492 18.3245L7.3892 15.3015L5.8908 15.2321ZM5.75396 18.3667C5.83563 19.1586 6.51588 19.7524 7.31152 19.7264L7.26248 18.2272C7.25928 18.2273 7.25771 18.2268 7.25669 18.2264C7.25526 18.2259 7.25337 18.2249 7.25144 18.2232C7.2495 18.2215 7.24825 18.2198 7.24754 18.2185C7.24703 18.2175 7.24637 18.216 7.24604 18.2128L5.75396 18.3667ZM7.45996 19.7065L10.46 18.9955L10.114 17.536L7.11404 18.247L7.45996 19.7065ZM10.4716 18.9927C10.7771 18.9151 11.05 18.7422 11.2506 18.499L10.0934 17.5445C10.0958 17.5417 10.0989 17.5397 10.1024 17.5388L10.4716 18.9927ZM11.2571 18.491L17.2971 10.959L16.1269 10.0206L10.0869 17.5526L11.2571 18.491ZM13.2971 7.95901L14.8851 5.97901L13.7149 5.04052L12.1269 7.02052L13.2971 7.95901ZM14.9135 5.94123C15.0521 5.74411 15.3214 5.6912 15.5243 5.82123L16.3337 4.5583C15.4544 3.99484 14.2873 4.2241 13.6865 5.0783L14.9135 5.94123ZM15.4492 5.7662L17.6862 7.6282L18.6458 6.47532L16.4088 4.61332L15.4492 5.7662ZM17.6352 7.58161C17.7111 7.6577 17.7535 7.761 17.7529 7.86852L19.2529 7.87676C19.2557 7.36905 19.0555 6.88127 18.6968 6.52192L17.6352 7.58161ZM17.7529 7.86852C17.7524 7.97604 17.7088 8.07886 17.632 8.15412L18.682 9.22541C19.0446 8.87002 19.2501 8.38447 19.2529 7.87676L17.7529 7.86852ZM17.5721 8.22025L16.1271 10.0203L17.2969 10.9593L18.7419 9.15928L17.5721 8.22025ZM11.9703 7.60091C12.3196 9.93221 14.4771 11.5503 16.813 11.2329L16.611 9.74659C15.0881 9.95352 13.6815 8.89855 13.4537 7.37862L11.9703 7.60091Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </template>
            </ButtonElement>
          </div>
        </div>

        <div
          v-if="
            visibilityDetail.uploadedAt ||
            visibilityDetail.uploadedBy ||
            visibilityDetail.lastDownloadedAt ||
            visibilityDetail.downloadCount
          "
          class="file-upload-download-details-wrapper"
        >
          <div
            v-if="visibilityDetail.uploadedAt || visibilityDetail.uploadedBy"
            class="file-upload-details"
          >
            <div v-if="visibilityDetail.uploadedBy" class="uploaded-by">
              <span>{{ messages?.uploadedByHeader || "Uploaded by" }}</span>
              <span>{{ checkUploadedByData(file) }}</span>
            </div>

            <div v-if="visibilityDetail.uploadedAt" class="uploaded-at">
              <span>{{ messages?.uploadedAtHeader || "Uploaded at" }}</span>
              <span>{{ formatDateTime(file.uploadedAt) }}</span>
            </div>
          </div>

          <div
            v-if="
              visibilityDetail.downloadCount ||
              visibilityDetail.lastDownloadedAt
            "
            class="file-download-details"
          >
            <div v-if="visibilityDetail.downloadCount" class="download-count">
              <span>{{ messages?.downloadCountHeader || "Downloads:" }}</span>
              <span>{{ file.downloadCount }}</span>
            </div>

            <div
              v-if="visibilityDetail.lastDownloadedAt"
              class="last-downloaded-at"
            >
              <span>{{
                messages?.lastDownloadedAtHeader || "Last download:"
              }}</span>
              <span>{{ formatDate(Number(file.lastDownloadedAt)) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="visibilityDetail.actions" class="file-actions">
      <ButtonElement
        v-if="actionButtonsVisibility.archive"
        v-bind="archiveButtonProps"
        :label="messages?.archiveAction || 'Archive'"
        size="small"
        @click="showArchiveConfirmation = true"
      >
        <template #iconLeft>
          <svg
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 19V6.2C4 5.0799 4 4.51984 4.21799 4.09202C4.40973 3.71569 4.71569 3.40973 5.09202 3.21799C5.51984 3 6.0799 3 7.2 3H16.8C17.9201 3 18.4802 3 18.908 3.21799C19.2843 3.40973 19.5903 3.71569 19.782 4.09202C20 4.51984 20 5.0799 20 6.2V17H6C4.89543 17 4 17.8954 4 19ZM4 19C4 20.1046 4.89543 21 6 21H20M9 7H15M9 11H15M19 17V21"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            ></path>
          </svg>
        </template>
      </ButtonElement>
      <ButtonElement
        v-if="actionButtonsVisibility.delete"
        v-bind="deleteButtonProps"
        :label="messages?.deleteAction || 'Delete'"
        size="small"
        @click="showDeleteConfirmation = true"
      >
        <template #iconLeft>
          <svg
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6M14 10V17M10 10V17"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            ></path>
          </svg>
        </template>
      </ButtonElement>
      <ButtonElement
        v-if="actionButtonsVisibility.download"
        v-bind="downloadButtonProps"
        :label="messages?.downloadAction || 'Download'"
        size="small"
        @click="emitAction('download')"
      >
        <template #iconLeft>
          <svg
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.5535 16.5061C12.4114 16.6615 12.2106 16.75 12 16.75C11.7894 16.75 11.5886 16.6615 11.4465 16.5061L7.44648 12.1311C7.16698 11.8254 7.18822 11.351 7.49392 11.0715C7.79963 10.792 8.27402 10.8132 8.55352 11.1189L11.25 14.0682V3C11.25 2.58579 11.5858 2.25 12 2.25C12.4142 2.25 12.75 2.58579 12.75 3V14.0682L15.4465 11.1189C15.726 10.8132 16.2004 10.792 16.5061 11.0715C16.8118 11.351 16.833 11.8254 16.5535 12.1311L12.5535 16.5061Z"
              fill="currentColor"
            ></path>
            <path
              d="M3.75 15C3.75 14.5858 3.41422 14.25 3 14.25C2.58579 14.25 2.25 14.5858 2.25 15V15.0549C2.24998 16.4225 2.24996 17.5248 2.36652 18.3918C2.48754 19.2919 2.74643 20.0497 3.34835 20.6516C3.95027 21.2536 4.70814 21.5125 5.60825 21.6335C6.47522 21.75 7.57754 21.75 8.94513 21.75H15.0549C16.4225 21.75 17.5248 21.75 18.3918 21.6335C19.2919 21.5125 20.0497 21.2536 20.6517 20.6516C21.2536 20.0497 21.5125 19.2919 21.6335 18.3918C21.75 17.5248 21.75 16.4225 21.75 15.0549V15C21.75 14.5858 21.4142 14.25 21 14.25C20.5858 14.25 20.25 14.5858 20.25 15C20.25 16.4354 20.2484 17.4365 20.1469 18.1919C20.0482 18.9257 19.8678 19.3142 19.591 19.591C19.3142 19.8678 18.9257 20.0482 18.1919 20.1469C17.4365 20.2484 16.4354 20.25 15 20.25H9C7.56459 20.25 6.56347 20.2484 5.80812 20.1469C5.07435 20.0482 4.68577 19.8678 4.40901 19.591C4.13225 19.3142 3.9518 18.9257 3.85315 18.1919C3.75159 17.4365 3.75 16.4354 3.75 15Z"
              fill="currentColor"
            ></path>
          </svg>
        </template>
      </ButtonElement>
      <ButtonElement
        v-if="actionButtonsVisibility.share"
        v-bind="shareButtonProps"
        :label="messages?.shareAction || 'Share'"
        size="small"
        @click="emitAction('share')"
      >
        <template #iconLeft>
          <svg
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              d="M16.5 2.25C14.7051 2.25 13.25 3.70507 13.25 5.5C13.25 5.69591 13.2673 5.88776 13.3006 6.07412L8.56991 9.38558C8.54587 9.4024 8.52312 9.42038 8.50168 9.43939C7.94993 9.00747 7.25503 8.75 6.5 8.75C4.70507 8.75 3.25 10.2051 3.25 12C3.25 13.7949 4.70507 15.25 6.5 15.25C7.25503 15.25 7.94993 14.9925 8.50168 14.5606C8.52312 14.5796 8.54587 14.5976 8.56991 14.6144L13.3006 17.9259C13.2673 18.1122 13.25 18.3041 13.25 18.5C13.25 20.2949 14.7051 21.75 16.5 21.75C18.2949 21.75 19.75 20.2949 19.75 18.5C19.75 16.7051 18.2949 15.25 16.5 15.25C15.4472 15.25 14.5113 15.7506 13.9174 16.5267L9.43806 13.3911C9.63809 12.9694 9.75 12.4978 9.75 12C9.75 11.5022 9.63809 11.0306 9.43806 10.6089L13.9174 7.4733C14.5113 8.24942 15.4472 8.75 16.5 8.75C18.2949 8.75 19.75 7.29493 19.75 5.5C19.75 3.70507 18.2949 2.25 16.5 2.25ZM14.75 5.5C14.75 4.5335 15.5335 3.75 16.5 3.75C17.4665 3.75 18.25 4.5335 18.25 5.5C18.25 6.4665 17.4665 7.25 16.5 7.25C15.5335 7.25 14.75 6.4665 14.75 5.5ZM6.5 10.25C5.5335 10.25 4.75 11.0335 4.75 12C4.75 12.9665 5.5335 13.75 6.5 13.75C7.4665 13.75 8.25 12.9665 8.25 12C8.25 11.0335 7.4665 10.25 6.5 10.25ZM16.5 16.75C15.5335 16.75 14.75 17.5335 14.75 18.5C14.75 19.4665 15.5335 20.25 16.5 20.25C17.4665 20.25 18.25 19.4665 18.25 18.5C18.25 17.5335 17.4665 16.75 16.5 16.75Z"
              fill="currentColor"
              fill-rule="evenodd"
            ></path>
          </svg>
        </template>
      </ButtonElement>
      <ButtonElement
        v-if="actionButtonsVisibility.view"
        v-bind="viewButtonProps"
        :label="messages?.viewAction || 'View'"
        size="small"
        @click="emitAction('view')"
      >
        <template #iconLeft>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            ></path>
            <path
              d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            ></path>
          </svg>
        </template>
      </ButtonElement>

      <ConfirmationFileActions
        :archive-confirmation-header="messages?.archiveConfirmationHeader"
        :archive-confirmation-message="messages?.archiveConfirmationMessage"
        :delete-confirmation-header="messages?.deleteConfirmationHeader"
        :delete-confirmation-message="messages?.deleteConfirmationMessage"
        :show-archive-confirmation="showArchiveConfirmation"
        :show-delete-confirmation="showDeleteConfirmation"
        @on:close-archive="showArchiveConfirmation = false"
        @on:close-delete="showDeleteConfirmation = false"
        @on:confirm-archive="onArchive"
        @on:confirm-delete="onDelete"
      />
    </div>
  </Card>
</template>

<script lang="ts">
export default {
  name: "FileCard",
};
</script>

<script setup lang="ts">
import { ref } from "vue";

import ButtonElement from "../Button/Index.vue";
import Card from "../Card/Index.vue";
import { formatDate, formatDateTime } from "../utils";
import ConfirmationFileActions from "./ConfirmationFileActions.vue";

import type { FileMessages, IFile } from "../types/file";
import type { PropType } from "vue";

const props = defineProps({
  actionButtonsVisibility: {
    default: () => ({
      archive: true,
      delete: true,
      download: true,
      share: true,
      view: true,
    }),
    type: Object,
  },
  allowEditDescription: Boolean,
  archiveButtonProps: {
    default: () => {},
    type: Object,
  },
  deleteButtonProps: {
    default: () => {},
    type: Object,
  },
  downloadButtonProps: {
    default: () => {},
    type: Object,
  },
  editDescriptionButtonProps: {
    default: () => {},
    type: Object,
  },
  file: {
    type: Object as PropType<IFile>,
    required: true,
  },
  messages: {
    default: () => {},
    type: Object as PropType<FileMessages>,
  },
  shareButtonProps: {
    default: () => {},
    type: Object,
  },
  showThumbnail: {
    default: true,
    type: Boolean,
  },
  viewButtonProps: {
    default: () => ({
      severity: "secondary",
    }),
    type: Object,
  },
  visibilityDetail: {
    default: () => ({
      actions: true,
      description: true,
      downloadCount: true,
      lastDownloadedAt: true,
      originalFileName: true,
      size: true,
      uploadedAt: true,
      uploadedBy: true,
    }),
    type: Object,
  },
});

const emit = defineEmits([
  "click:editDescription",
  "on:archive",
  "on:delete",
  "on:download",
  "on:share",
  "on:view",
]);

const showArchiveConfirmation = ref<boolean>(false);
const showDeleteConfirmation = ref<boolean>(false);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const checkUploadedByData = (data: any) => {
  if (!data.uploadedBy) {
    return "\u2014";
  }

  if (data.uploadedBy.givenName || data.uploadedBy.lastName) {
    return `${data.uploadedBy.givenName || ""} ${data.uploadedBy.lastName || ""}`;
  }

  return data.uploadedBy.email;
};

const emitAction = (action: string) => {
  switch (action) {
    case "archive":
    case "delete":
    case "download":
    case "share":
    case "view":
      emit(`on:${action}`, props.file);
      break;
  }
};

const onArchive = () => {
  emitAction("archive");

  showArchiveConfirmation.value = false;
};

const onDelete = () => {
  emitAction("delete");

  showDeleteConfirmation.value = false;
};
</script>

<style lang="css">
@import "../assets/css/file-card.css";
</style>
